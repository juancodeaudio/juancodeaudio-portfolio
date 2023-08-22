import Button from "../common/Button"
import WidthLayout from "../common/WidthLayout"

const Footer = () => {
  return (
    <footer className="w-full bg-dark py-12 text-light text-sm">
      <WidthLayout className="flex flex-col gap-12">
        <div className="py-10 flex justify-between px-12 items-center border-t border-light/50">
          <div className="flex flex-col gap-12">
            <h3>alvaradovallejo.juan@gmail.com</h3>
            <h3>+(571) 3043807406</h3>
          </div>
          <div>
          <Button buttonColor="light" variant="flat" hoverColor="bg-primary">ASK ME</Button>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="pb-3 opacity-50">INFO</div>
            <div>Copyright © 2023 | Coded by juancodeaudio</div>
          </div>
          <div>
            <div className="pb-3 opacity-50">
              SOCIALS
            </div>
            <ul className="flex gap-8">
              <li><a href="https://www.linkedin.com/in/juancodeaudio/">LinkedIn</a></li>
              <li><a href="https://github.com/juancodeaudio">Github</a></li>
              <li><a href="https://www.instagram.com/juancodeaudio/">Instagram</a></li>
              <li><a href="https://www.linkedin.com/in/juancodeaudio/">X</a></li>
            </ul>
          </div>
        </div>
      </WidthLayout>
    </footer>
  )
}

export default Footer