import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { JSX } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";


const childVariant={
    hidden:{opacity:0, scale:0.9},
    visible:{opacity:1, scale:1},
}

type Props = {
    icon:JSX.Element;
    title:string,
    description:string;
    setselectedPage:(value: SelectedPage)=> void;
}


function Benefit({icon,title, description, setselectedPage}: Props) {
  return (
    <motion.div 
        variants={childVariant}
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true, amount: 0.5 }}
        className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
        >
        <div className="mb-4 flex justify-center">
            <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
                {icon}
            </div>
        </div>
        <h4 className="font-bold">{title}</h4>
        <p className="my-3">{description}</p>
        <AnchorLink
            className="text-sm font-bold text-red-500 underlie hover:text-yellow-500"
            onClick={()=>setselectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
        >
            <p>Learn More</p>
        </AnchorLink>
    </motion.div>
  )
}

export default Benefit