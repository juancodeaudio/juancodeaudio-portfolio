'use client'
import { motion } from 'framer-motion'

type TitleProps = {
  text: string;
  className?: string;
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

  // console.log("Spaced: ", splittedWords)
  // console.log("Letters: ", chars)

  return { splittedWords, chars };
}

export const Title = ({text, className}: TitleProps) => {

  const titleVariants = {
    initial: {},
    animate: {}
  }
  const wordVariants = {
    initial: {},
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      }
    }
  }
  const charVariants = {
    initial: {
      y:110
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
      className={`overflow-hidden ${className}`}
      variants={titleVariants}
      initial='initial'
      whileInView='animate'
    >
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          className='inline-block mr-5 whitespace-nowrap'
          aria-hidden="true"
          variants={wordVariants}
        >
          {word.split("").map((char, j) => (
            <motion.span
              key={j}
              className='inline-block'
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

export const Title2 = ({text, className}: TitleProps) => {

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
      className={className}
      variants={titleVariants}
      initial='initial'
      whileInView='animate'
      // viewport={{ once: true }}
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

export const Title3 = ({text, className}: TitleProps) => {

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
      className={className}
      variants={titleVariants}
      initial='initial'
      whileInView='animate'
      viewport={{ once: true }}
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
      viewport={{ once: true }}
    >
      {children}
    </motion.p>
  )
}

export const AnimatedCharacters = ({text, className}: TitleProps) => {
  // Framer Motion variant object, for controlling animation
  const item = {
    hidden: {
      y: "200%",
    },
    visible: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1
      }
    }
  };

  const {splittedWords, chars} = splitSentences(text);

  return (
    <h3 className={className}>
      {chars.map((word, index) => {
        return (
          // Wrap each word in the Wrapper component
          <span className='whitespace-nowrap' key={index}>
            {chars[index].flat().map((element, index) => {
              return (
                <span
                  style={{
                    overflow: "hidden",
                    display: "inline-block"
                  }}
                  key={index}
                >
                  <motion.span
                    style={{ display: "inline-block" }}
                    variants={item}
                    initial='hidden'
                    whileInView='visible'
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </span>
        );
      })}
      {/* {} */}
    </h3>
  );
};