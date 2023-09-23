import { useRef } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { ContactFormSchema } from "@/lib/schema"
import { sendEmail } from "@/app/_actions"
import { motion, useScroll, useTransform } from "framer-motion"
import { Title2 } from "@/common/TextStyles"
import Button from "@/common/Button"

type ContactFormInputs = z.infer<typeof ContactFormSchema>

const inputs = {
  initial: {
    width: '90%',
    marginBottom: 0,
    marginTop: 0,
    x: -50,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 0.4,
    transition: {
      ease: 'easeOut',
      delay: 0.4,
      duration: 1
    }
  },
  hover: {
    scale: 1.05,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.4
    }
  },
  focus: {
    opacity: 1,
    width: '100%',
    marginBottom: 30,
    marginTop: 10 
  },
  viewport: {
    margin: '0px 0px -30% 0px',
    once: true 
  }
}

const ContactForm = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema)
  })

  const processForm: SubmitHandler<ContactFormInputs> = async (data) => {

    const result = await sendEmail(data)

    if (result?.success) {
      console.log({ data: result.data })
      toast.success('Email sent!')
      reset()
      return
    }

    // toast error
    console.log(result?.error)
    toast.error('Something went wrong!')
  }

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <form
      onSubmit={handleSubmit(processForm)}
      className='pb-24 flex flex-col justify-center gap-0 lg:gap-16 items-center'
    >
      <div ref={ref}  className="flex flex-col lg:flex-row w-full mb-28 gap-32 lg:gap-0">
        <motion.div style={{y: y}} className="w-full lg:w-1/2 px-8 sm:px-16 md:px-24 lg:px-16 flex flex-col gap-10">
          <div className="flex flex-col">
            <label htmlFor="name">
              <Title2 text="NAME" />
            </label>
            <motion.input
              variants={inputs}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              whileFocus="focus"
              style={{originY: 1, originX: 0}}
              viewport={{
                margin: '0px 0px -20% 0px',
                once: true 
              }}
              type="text"
              id="name"
              placeholder="John Doe *"
              autoComplete="name"
              {...register('name')}
            />
            {errors.name?.message && (
              <p className='text-sm text-red-400 mt-4'>{errors.name.message}</p>
            )}
          </div>
          <motion.div className="flex flex-col">
            <label htmlFor="organization">
              <Title2 text="ORGANIZATION" />
            </label>
            <motion.input
              variants={inputs}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              whileFocus="focus"
              style={{originY: 1, originX: 0}}
              viewport={{
                margin: '0px 0px -20% 0px',
                once: true 
              }}
              type="text"
              id="organization"
              placeholder="John & Doe Inc. *"
              autoComplete="organization"
              {...register('organization')}
            />
          </motion.div>
          <div className="flex flex-col">
            <label htmlFor="email">
              <Title2 text="EMAIL" />
            </label>
            <motion.input
              variants={inputs}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              whileFocus="focus"
              style={{originY: 1, originX: 0}}
              viewport={{
                margin: '0px 0px -20% 0px',
                once: true 
              }}
              type="text"
              id="email"
              placeholder="john@doe.com *"
              autoComplete="email"
              {...register('email')}
            />
            {errors.email?.message && (
              <p className='text-sm text-red-400 mt-4'>{errors.email.message}</p>
            )}
          </div>
        </motion.div>
        <motion.div style={{y: y2}} className="w-full lg:w-1/2 px-8 sm:px-16 md:px-24 lg:px-16 xl:px-24 flex flex-col gap-10">
          <div className="flex flex-col">
            <label htmlFor="service">
              <Title2 text="SERVICE" />
            </label>
            <motion.input
              variants={inputs}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              whileFocus="focus"
              style={{originY: 1, originX: 0}}
              viewport={{
                margin: '0px 0px -20% 0px',
                once: true 
              }}
              type="text"
              id="service"
              placeholder="Web Development, Audio Development... *"
              {...register('service')}
            />
            {errors.service?.message && (
              <p className='text-sm text-red-400 mt-4'>{errors.service.message}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="message">
              <Title2 text="MESSAGE" />
            </label>
            <motion.textarea
              variants={inputs}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              whileFocus="focus"
              style={{originY: 1, originX: 0}}
              maxLength={250}
              viewport={{
                margin: '0px 0px -20% 0px', 
                once: true 
              }}
              id="message"
              placeholder="Hello Juan, I'm looking for... *"
              {...register('message')}
            />
            {errors.message?.message && (
              <p className='text-sm text-red-400 mt-4'>{errors.message.message}</p>
            )}
          </div>
        </motion.div>
      </div>
      <Button
        variant="bordered"
        buttonColor="light"
        hoverColor="bg-primary"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send'}
      </Button>
    </form>
  )
}

export default ContactForm