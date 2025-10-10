import React, { useEffect, useState } from 'react';

interface BubbleProps {
  size: number;
  delay: number;
  duration: number;
  left: number;
  opacity: number;
}

const Bubble: React.FC<BubbleProps> = ({ size, delay, duration, left, opacity }) => {
  return (
    <div
      className="absolute rounded-full bg-primary/20 pointer-events-none"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}%`,
        bottom: '-50px',
        animation: `bubble-float ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        opacity: opacity,
        boxShadow: `0 0 ${size * 0.3}px rgba(59, 130, 246, 0.3)`,
      }}
    />
  );
};

interface BubbleAnimationProps {
  className?: string;
  bubbleCount?: number;
}

export const BubbleAnimation: React.FC<BubbleAnimationProps> = ({ 
  className = '', 
  bubbleCount = 6 
}) => {
  const [bubbles, setBubbles] = useState<BubbleProps[]>([]);

  useEffect(() => {
    const generateBubbles = () => {
      const newBubbles: BubbleProps[] = [];
      for (let i = 0; i < bubbleCount; i++) {
        newBubbles.push({
          size: Math.random() * 30 + 10, // 10-40px
          delay: Math.random() * 3, // 0-3s delay
          duration: Math.random() * 8 + 4, // 4-12s duration
          left: Math.random() * 100, // 0-100% left position
          opacity: Math.random() * 0.6 + 0.2, // 0.2-0.8 opacity
        });
      }
      setBubbles(newBubbles);
    };

    generateBubbles();
    
    // Regenerate bubbles every 15 seconds for variety
    const interval = setInterval(generateBubbles, 15000);
    return () => clearInterval(interval);
  }, [bubbleCount]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <style jsx>{`
        @keyframes bubble-float {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) scale(0.5);
            opacity: 0;
          }
        }
      `}</style>
      {bubbles.map((bubble, index) => (
        <Bubble key={index} {...bubble} />
      ))}
    </div>
  );
};

// Hover bubble effect component for navigation items
interface HoverBubbleProps {
  children: React.ReactNode;
  className?: string;
}

export const HoverBubble: React.FC<HoverBubbleProps> = ({ children, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      
      {/* Bubble effect on hover */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-primary/30 animate-ping"
              style={{
                width: `${8 + i * 4}px`,
                height: `${8 + i * 4}px`,
                left: `${20 + i * 30}%`,
                top: `${20 + i * 10}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1s',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Click bubble effect component
export const ClickBubble: React.FC<HoverBubbleProps> = ({ children, className = '' }) => {
  const [clickBubbles, setClickBubbles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    const newBubble = {
      id: Date.now(),
      x,
      y,
    };
    
    setClickBubbles(prev => [...prev, newBubble]);
    
    // Remove bubble after animation
    setTimeout(() => {
      setClickBubbles(prev => prev.filter(bubble => bubble.id !== newBubble.id));
    }, 1000);
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
    >
      {children}
      
      {clickBubbles.map(bubble => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-primary/50 pointer-events-none animate-ping"
          style={{
            width: '20px',
            height: '20px',
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            transform: 'translate(-50%, -50%)',
            animationDuration: '1s',
          }}
        />
      ))}
    </div>
  );
};
