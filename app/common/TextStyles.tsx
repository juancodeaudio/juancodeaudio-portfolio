'use client'
import { motion, MotionValue } from 'framer-motion'

type TitleProps = {
  text: string;
  className?: string;
  y?: MotionValue;
}
type ParagraphProps = {
  children: React.ReactNode;
  className?: string;
}

function splitSentences(text: string) {
  const words = text.split(" ");
  const splittedWords = words.map((word) => {
    return word = word + "\u00A0";
  });
  const chars = splittedWords.map(
    (char) => (char.split(""))
  );
  return { splittedWords, chars };
}

export const Title: React.FC<TitleProps>  = ({text, className}) => {

  const titleVariants = {
    initial: {},
    animate: {
      transition: {
        delay: 1
      }
    }
  }
  const wordVariants = {
    initial: {},
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.05,
      }
    }
  }
  const charVariants = {
    initial: {
      y:260,
    },
    animate: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1
      }
    }
  }

  return (
    <motion.h1
      aria-label={text}
      role='heading'
      className={`${className}`}
      variants={titleVariants}
      initial='initial'
      whileInView='animate'
    >
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          className='inline-block mr-5 whitespace-nowrap overflow-hidden'
          aria-hidden="true"
          variants={wordVariants}
        >
          {word.split("").map((char, j) => (
            <motion.span
              key={j}
              className='inline-block pt-9 pb-12'
              aria-hidden="true"
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </motion.h1>
  )
}

export const Title2: React.FC<TitleProps> = ({text, className, y=0}) => {

  const titleVariants = {
    initial: {},
    animate: {}
  }
  const wordVariants = {
    initial: {
      y: '100%',
    },
    animate: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1
      }
    }
  }

  const { splittedWords } = splitSentences(text);

  return (
    <motion.h2
      aria-label={text}
      role='heading'
      style={{ y }}
      className={className}
      variants={titleVariants}
      initial='initial'
      whileInView='animate'
      viewport={{
        margin: '0px 0px -30% 0px',
        once: true
      }}
    >
      {splittedWords.map((word, i) => (
        <span
          key={i}
          aria-hidden="true"
          className='inline-block whitespace-nowrap overflow-hidden'
        >
          <motion.span
            className='inline-block'
            aria-hidden="true"
            variants={wordVariants}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.h2>
  )
}

export const Title3: React.FC<TitleProps> = ({text, className, y=0}) => {

  const titleVariants = {
    initial: {},
    animate: {}
  }
  const wordVariants = {
    initial: {
      y: '100%',
    },
    animate: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1
      }
    }
  }

  const { splittedWords } = splitSentences(text);

  return (
    <motion.h3
      aria-label={text}
      role='heading'
      style={{ y }}
      className={className}
      variants={titleVariants}
      initial='initial'
      whileInView='animate'
      viewport={{
        margin: '0px 0px -30% 0px',
        once: true
      }}
    >
      {splittedWords.map((word, i) => (
        <span
          key={i}
          aria-hidden="true"
          className='inline-block whitespace-nowrap overflow-hidden'
        >
          <motion.span
            className='inline-block'
            aria-hidden="true"
            variants={wordVariants}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.h3>
  )
}

export const Paragraph = ({children, className}: ParagraphProps) => {

  const paragraphVariants = {
    initial: {
      opacity: 0,
      y:30
    },
    animate: {
      opacity: [0, 1, 1],
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.5
      }
    }
  }

  return (
    <motion.p
      className={className}
      variants={paragraphVariants}
      initial='initial'
      whileInView='animate'
      viewport={{
        margin: '0px 0px -30% 0px',
        once: true 
      }}
    >
      {children}
    </motion.p>
  )
}