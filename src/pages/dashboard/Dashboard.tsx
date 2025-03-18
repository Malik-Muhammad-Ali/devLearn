import React from 'react';
import { motion } from 'framer-motion';
import { FiPlusCircle, FiBook, FiTrendingUp, FiCheck, FiX, FiAward, FiTarget } from 'react-icons/fi';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Navigate } from 'react-router-dom';
import useAppStore from '../../zustand/store';
import { useNavigate } from 'react-router-dom';

interface DashboardStats {
  totalQuizzes: number;
  passedQuizzes: number;
  failedQuizzes: number;
  averageScore: number;
  highestStreak: number;
  bestScore: number;
}

interface PerformanceData {
  date: string;
  score: number;
}

interface ChartData {
  name: string;
  score: number;
}

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className={`p-6 rounded-xl shadow-lg ${color} cursor-pointer transition-shadow hover:shadow-xl`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white/80 text-sm font-medium">{title}</p>
          <h3 className="text-white text-2xl font-bold mt-2">{value}</h3>
        </div>
        <div className="text-white/90 text-2xl">{icon}</div>
      </div>
    </motion.div>
  );
};

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, token } = useAppStore();
  const userId = user?._id;

  console.log('User data:', { user, token, userId });
  const [stats, setStats] = React.useState<DashboardStats>({
    totalQuizzes: 0,
    passedQuizzes: 0,
    failedQuizzes: 0,
    averageScore: 0,
    highestStreak: 0,
    bestScore: 0
  });

  const [chartData, setChartData] = React.useState<ChartData[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    const fetchDashboardStats = async () => {
      try {
        if (!user || !token || !userId) {
          setError('Authentication required');
          setLoading(false);
          return;
        }

        const response = await fetch('https://devlearnbackend.up.railway.app/api/dashboard/stats', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'User-ID': userId
          }
        });
        if (!response.ok) throw new Error('Failed to fetch dashboard data');
        
        const data = await response.json();
        if (!data.success) throw new Error(data.error || 'Failed to fetch dashboard data');

        setStats({
          totalQuizzes: data.data.totalQuizzes,
          passedQuizzes: data.data.passedQuizzes,
          failedQuizzes: data.data.failedQuizzes,
          averageScore: Number(data.data.averageScore),
          highestStreak: data.data.highestStreak,
          bestScore: data.data.bestScore
        });

        // Transform performance trend data for the chart
        const transformedChartData = data.data.performanceTrend.map((item: PerformanceData) => ({
          name: new Date(item.date).toLocaleDateString(),
          score: item.score
        }));
        setChartData(transformedChartData);
        setLoading(false);
      } catch (err) {
        console.error('Dashboard data fetch error:', err);
        setError('Failed to load dashboard data');
        setLoading(false);
      }
    };

    fetchDashboardStats();
  }, []);

  if (!user || !token || !userId) {
    return <Navigate to="/login" replace />;
  }

  if (loading) {
    return (
      <div className="pt-28 px-8 pb-8 max-w-7xl mx-auto flex items-center justify-center">
        <div className="text-gray-600">Loading dashboard data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-28 px-8 pb-8 max-w-7xl mx-auto flex items-center justify-center">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="pt-28 px-8 pb-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600 mt-2">Track your learning progress and create new quizzes</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Quizzes"
          value={stats.totalQuizzes}
          icon={<FiBook />}
          color="bg-blue-600"
        />
        <StatCard
          title="Passed"
          value={stats.passedQuizzes}
          icon={<FiCheck />}
          color="bg-green-600"
        />
        <StatCard
          title="Failed"
          value={stats.failedQuizzes}
          icon={<FiX />}
          color="bg-red-600"
        />
        <StatCard
          title="Average Score"
          value={`${stats.averageScore}%`}
          icon={<FiTrendingUp />}
          color="bg-purple-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Quiz Performance</h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#666', fontSize: 12 }}
                />
                <YAxis 
                  domain={[60, 100]}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#666', fontSize: 12 }}
                  width={35}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                  labelStyle={{ color: '#666' }}
                  formatter={(value) => [`${value}%`, 'Performance']}
                />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#4F46E5"
                  strokeWidth={3}
                  dot={false}
                  activeDot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg p-6 text-white cursor-pointer transition-shadow hover:shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Achievement Highlights</h2>
              <FiAward className="text-2xl text-yellow-300" />
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FiTarget className="text-yellow-300" />
                  <span>Best Score</span>
                </div>
                <span className="text-2xl font-bold">{stats.bestScore}%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FiTrendingUp className="text-yellow-300" />
                  <span>Highest Streak</span>
                </div>
                <span className="text-2xl font-bold">{stats.highestStreak}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
            <div className="space-y-4">
              <motion.button
                className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  navigate('/quiz-generation');
                }}
              >
                <FiPlusCircle className="text-xl" />
                Create New Quiz
              </motion.button>
              <motion.button 
                className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View All Quizzes
              </motion.button>
              <motion.button 
                className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Analytics
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;