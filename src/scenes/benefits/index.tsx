import HText from "@/shared/HText";
import { BenfitType, SelectedPage } from "@/shared/types";
import { 
    AcademicCapIcon, 
    HomeModernIcon, 
    UserGroupIcon 
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
const benefits:Array<BenfitType> =[
    {
        icon:<HomeModernIcon className="h-6 w-6 "/>,
        title:"State of the Art Facilities",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iusto quidem at quisquam ex corrupti accusamus consequuntur cumque pariatur voluptatum neque, autem architecto.",
    },
    {
        icon:<UserGroupIcon className="h-6 w-6 "/>,
        title:"100's of Diverse Classes",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur in magni iure dolor praesentium, aspernatur beatae porro cupiditate similique provident sunt numquam deleniti labore repudiandae. Quasi ad consequuntur, blanditiis fugit sit minima quod."
    },
    {
        icon:<AcademicCapIcon className="h-6 w-6 "/>,
        title:"Expert and Pro Trainers",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iusto quidem at quisquam ex corrupti accusamus consequuntur cumque pariatur voluptatum neque.",
    }

]

const container = {
    hidden:{},
    visible:{
        transition:{staggerChildren: 0.2}
    },
}
type Props = {
    setselectedPage:(value: SelectedPage) => void;
}

const Benefits=({setselectedPage}: Props)=> {
  return (
    <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div
            onViewportEnter={()=>setselectedPage(SelectedPage.Benefits)}

        >
            {/* Header */}
            <motion.div 
                className="md:my-5 md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount:0.5}}
                transition={{delay:0.2, duration:0.5}}
                variants={{
                    hidden:{opacity:0, x:-50},
                    visible:{opacity:1, x:0},
                }}
            >
                <HText>
                    MORE THAN JUST GYM
                </HText>
                <p className="my-5 text-sm">
                    We provide world fitness equipment, trainers and classes to
                    get you to your ultimate fitness goals with ease. We provide true 
                    care into each and every member.
                </p>
            </motion.div>

            {/* Benefits */}

            <motion.div 
                className="md:flex items-center justify-between gap-7 mt-5"
                initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount:0.5}}
                variants={container}
                >
                {benefits.map((benefit:BenfitType,index:number)=>(
                    <Benefit
                        key={index}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setselectedPage={setselectedPage}
                    />
                ))}
            </motion.div>

            {/* Graphics and Description */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex ">
                {/* Graphic */}
                <img 
                className="mx-auto" 
                src={BenefitsPageGraphic} 
                alt="benefits-page-graphic" />

                {/* Description */}

                <div>
                    {/* Title */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves" >
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once:true, amount:0.5}}
                                transition={{delay:0.2, duration:0.5}}
                                variants={{
                                    hidden:{opacity:0, x:50},
                                    visible:{opacity:1, x:0},
                                }}
                            >
                                <HText>
                                    MILLIONS OF HAPPY MEMBERS GETTING {" "}
                                    <span className="text-primary-500">Fit</span>
                                </HText>
                            </motion.div>
                        </div>

                    </div>
                    {/* Description */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once:true, amount:0.5}}
                        transition={{delay:0.3, duration:0.5}}
                        variants={{
                            hidden:{opacity:0, x:50},
                            visible:{opacity:1, x:0},
                        }}
                    >
                        <p className="my-5 ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sit dolorum nam facere eius eligendi expedita ipsa culpa repellat cum repudiandae saepe iusto nesciunt totam molestias aut sint blanditiis autem minus numquam consequuntur! Maiores, sed aperiam? Incidunt error vel odit repellendus ad tenetur quod fuga?
                        </p>
                        <p className="mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptas earum omnis atque quo nulla itaque, ratione, ipsam quae neque excepturi voluptatum velit dignissimos ad enim?
                        </p>
                    </motion.div>

                    {/* Button */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setselectedPage={setselectedPage}>
                                Join Now
                            </ActionButton>
                        </div>

                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits;