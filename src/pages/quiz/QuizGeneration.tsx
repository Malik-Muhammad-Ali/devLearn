import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiTarget, FiAward } from 'react-icons/fi';
import './QuizGeneration.css';

interface QuizConfig {
  numQuestions: string;
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'advanced' | 'mastery';
}

const QuizGeneration: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [config, setConfig] = useState<QuizConfig>({
    numQuestions: '10',
    topic: '',
    difficulty: 'medium'
  });
  const [showCustomTopic, setShowCustomTopic] = useState(false);
  const [showCustomNumber, setShowCustomNumber] = useState(false);
  const [customTopic, setCustomTopic] = useState('');
  const [customNumber, setCustomNumber] = useState('');

  const difficultyColors = {
    easy: '#4CAF50',
    medium: '#2196F3',
    hard: '#FF9800',
    advanced: '#F44336',
    mastery: '#9C27B0'
  };

  const difficulties = [
    { level: 'easy', description: 'Perfect for beginners' },
    { level: 'medium', description: 'Build your confidence' },
    { level: 'hard', description: 'Challenge yourself' },
    { level: 'advanced', description: 'Push your limits' },
    { level: 'mastery', description: 'Become an expert' }
  ];

  const handleTopicSelect = (topic: string) => {
    if (topic === 'Other') {
      setShowCustomTopic(true);
      return;
    }
    setConfig({ ...config, topic });
    setActiveStep(1);
  };

  const handleCustomTopicSubmit = () => {
    if (customTopic.trim()) {
      setConfig({ ...config, topic: customTopic.trim() });
      setShowCustomTopic(false); // Hide the custom input after submission
      setActiveStep(1);
    }
  };

  const handleDifficultySelect = (difficulty: QuizConfig['difficulty']) => {
    setConfig({ ...config, difficulty });
    setActiveStep(2);
  };

  const handleNumberSelect = (num: string) => {
    if (num === 'custom') {
      setShowCustomNumber(true);
      return;
    }
    setConfig({ ...config, numQuestions: num });
  };

  const handleCustomNumberSubmit = () => {
    if (customNumber.trim() && !isNaN(Number(customNumber))) {
      setConfig({ ...config, numQuestions: customNumber.trim() });
      setShowCustomNumber(false); // Hide the custom input after submission
    }
  };

  const handleGenerateQuiz = () => {
    console.log('Generating quiz with config:', config);
    // Add your quiz generation logic here
  };

  const popularTopics = [
    'JavaScript', 'Python', 'React', 'Node.js',
    'Data Structures', 'Algorithms', 'System Design',
    'Machine Learning', 'Web Development', 'Other'
  ];

  const questionNumbers = ['5', '10', '15', '20', '25', '30', 'custom'];

  return (
    <>
      {/* Background elements inspired by the hero section */}
      <div className="quiz-page-background">
        <div className="bg-gradient-1"></div>
        <div className="bg-gradient-2"></div>
        <div className="bg-dots"></div>
      </div>

      <motion.div 
        className="quiz-generation-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
      <div className="steps-container">
        {/* Topic Selection */}
        <motion.div 
          className={`step-content ${activeStep === 0 ? 'active' : ''}`}
          initial={false}
          animate={{ 
            x: activeStep === 0 ? 0 : '-100%',
            opacity: activeStep === 0 ? 1 : 0
          }}
        >
          <h2><FiBookOpen className="step-icon" /> Choose Your Topic</h2>
          <div className="topics-grid">
            {popularTopics.map((topic) => {
              // Check if this is the 'Other' card and if we have a custom topic set
              const isCustomTopicCard = topic === 'Other' && config.topic && !popularTopics.includes(config.topic);
              
              return (
                <motion.div
                  key={topic}
                  className={`topic-card ${topic === 'Other' ? 'other-card' : ''} ${config.topic === topic || isCustomTopicCard ? 'selected-card' : ''}`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleTopicSelect(topic)}
                >
                  {topic === 'Other' ? (
                    isCustomTopicCard ? (
                      <div className="custom-topic-display">
                        <span>{config.topic}</span>
                        <small>(custom)</small>
                      </div>
                    ) : (
                      <span></span>
                    )
                  ) : (
                    <span>{topic}</span>
                  )}
                  {(config.topic === topic || isCustomTopicCard) && <div className="selected-indicator">✓</div>}
                </motion.div>
              );
            })}
          </div>
          {showCustomTopic && (
            <motion.div 
              className="custom-input-container"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <input
                type="text"
                value={customTopic}
                onChange={(e) => setCustomTopic(e.target.value)}
                placeholder="Enter your topic"
                className="custom-input"
              />
              <motion.button
                className="submit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCustomTopicSubmit}
              >
                Continue
              </motion.button>
            </motion.div>
          )}
        </motion.div>

        {/* Difficulty Selection */}
        <motion.div 
          className={`step-content ${activeStep === 1 ? 'active' : ''}`}
          initial={false}
          animate={{ 
            x: activeStep === 1 ? 0 : activeStep < 1 ? '100%' : '-100%',
            opacity: activeStep === 1 ? 1 : 0
          }}
        >
          <h2><FiTarget className="step-icon" /> Select Difficulty</h2>
          <div className="difficulty-grid">
            {difficulties.map(({ level, description }) => (
              <motion.div
                key={level}
                className={`difficulty-card ${config.difficulty === level ? 'selected-difficulty' : ''}`}
                style={{ 
                  backgroundColor: difficultyColors[level as keyof typeof difficultyColors],
                  opacity: config.difficulty === level ? 1 : 0.9
                }}
                whileHover={{ 
                  scale: 1.05,
                  opacity: 1,
                  y: -5,
                  boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleDifficultySelect(level as QuizConfig['difficulty'])}
              >
                <h3>{level.charAt(0).toUpperCase() + level.slice(1)}</h3>
                <p>{description}</p>
                {config.difficulty === level && <div className="selected-indicator-white">✓</div>}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Number of Questions */}
        <motion.div 
          className={`step-content ${activeStep === 2 ? 'active' : ''}`}
          initial={false}
          animate={{ 
            x: activeStep === 2 ? 0 : '100%',
            opacity: activeStep === 2 ? 1 : 0
          }}
        >
          <h2><FiAward className="step-icon" /> Number of Questions</h2>
          <div className="numbers-grid">
            {questionNumbers.map((num) => {
              // Check if this is the 'custom' card and if we have a custom number set
              const isCustomNumberCard = num === 'custom' && config.numQuestions && !questionNumbers.includes(config.numQuestions);
              
              return (
                <motion.div
                  key={num}
                  className={`number-card ${num === 'custom' ? 'other-card' : ''} ${config.numQuestions === num || isCustomNumberCard ? 'selected-card' : ''}`}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNumberSelect(num)}
                >
                  {num === 'custom' ? (
                    isCustomNumberCard ? (
                      <div className="custom-number-display">
                        <span>{config.numQuestions}</span>
                        <small>questions (custom)</small>
                      </div>
                    ) : (
                      <span></span>
                    )
                  ) : (
                    <>
                      <span>{num}</span>
                      <small>questions</small>
                    </>
                  )}
                  {(config.numQuestions === num || isCustomNumberCard) && <div className="selected-indicator">✓</div>}
                </motion.div>
              );
            })}
          </div>
          {showCustomNumber && (
            <motion.div 
              className="custom-input-container"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <input
                type="number"
                min="1"
                value={customNumber}
                onChange={(e) => setCustomNumber(e.target.value)}
                placeholder="Enter number of questions"
                className="custom-input"
              />
              <motion.button
                className="submit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCustomNumberSubmit}
              >
                Continue
              </motion.button>
            </motion.div>
          )}
          {config.numQuestions && (
            <motion.button
              className="generate-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGenerateQuiz}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Generate Quiz
            </motion.button>
          )}
        </motion.div>
      </div>

      <div className="step-dots">
        {[0, 1, 2].map((step) => (
          <motion.div
            key={step}
            className={`step-dot ${activeStep === step ? 'active' : ''}`}
            whileHover={{ scale: 1.2 }}
            onClick={() => setActiveStep(step)}
          />
        ))}
      </div>

      {/* Back Button */}
      {activeStep > 0 && (
        <motion.button
          className="back-button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveStep(activeStep - 1)}
        >
          Back
        </motion.button>
      )}
    </motion.div>
    </>
  );
};

export default QuizGeneration;
