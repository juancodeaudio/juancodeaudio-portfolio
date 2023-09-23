'use client'

import { motion } from "framer-motion"
import WidthLayout from "@/common/WidthLayout"
import { Title } from "@/common/TextStyles"
import ContactForm from "@/components/contact/ContactForm"
import { ArrowDownIcon } from "@/common/icons"

const arrowVariants = {
  initial: {
    y: -50
  },
  animate: {
    y: [-50, 50, 50, 100],
    transition: {
      delay: 1.5,
      repeat: Infinity,
      duration: 2 
    }
  }
}

const Contact = () => {

  // const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault()
  //   const form = event.currentTarget;
  //   const formData = new FormData(form);
  //   const formDataObject = Object.fromEntries(formData);

  //   const data = await fetch('/api/form', {
  //     method: 'POST',
  //     body: JSON.stringify(formDataObject)
  //   }).then( res => res.json() )

  //   setData(data)
  //   alert(`Name: ${data.name}`)
  //   console.log(data)
    
  //   form.reset()
  // }

  return (
    <main>
      <WidthLayout>
        <section className='relative pt-64 pb-24 flex flex-col justify-center gap-16 items-center'>
          <Title className="text-center mb-20" text="Contact Me" />
          <div className="absolute top-80 sm:top-[340px] md:top-[450px] xl:top-[590px] right-1/4 h-24 w-10 flex justify-center overflow-hidden">
            <motion.div variants={arrowVariants} initial="initial" animate="animate">
              <ArrowDownIcon className="h-12 w-12" />
            </motion.div>
          </div>
        </section>
        <ContactForm />
      </WidthLayout>
    </main>
  )
}

export default Contact