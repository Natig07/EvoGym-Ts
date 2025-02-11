import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";

type Props = {
    setselectedPage:(value:SelectedPage)=>void;
}

function ContactUs({setselectedPage}: Props) {

    const inputStyles = `w-full mb-5 rounded-lg bg-primary-300 px-5 py-3 placeholder-gray-20 outline-none text-white`


    const {
        register,
        trigger,
        formState:{errors}
    }=useForm();

    const onSubmit=  async (e:any)=>{
        const isValid = await trigger();
        if(!isValid){
            e.preventDefault();
        }
    }

  return (
    <section
        id="contactus" className="mx-auto w-5/6 pt-24 pb-32"
    >
        <motion.div
            onViewportEnter={()=>setselectedPage(SelectedPage.ContactUs)}
        >
            {/* Header */}
            <motion.div
                className="md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount:0.5}}
                transition={{duration:0.5}}
                variants={{
                    hidden:{opacity:0, x:-50},
                    visible:{opacity:1, x:0},
                }}
            >
                <HText
                
                >
                    <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
                </HText>
                <p className="my-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ut vitae non distinctio, earum aliquid ad itaque vero, sequi quasi, eius rerum cum accusantium sed possimus consequatur. Suscipit porro maxime laboriosam ullam quia impedit laborum alias repudiandae odio, consectetur culpa?
                </p>
            </motion.div>

            {/* Form and Image */}
            <div className=" mt-10 justify-between gap-8 md:flex">
                <motion.div
                    className=" mt-10 basis-3/5 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true, amount:0.5}}
                    transition={{duration:0.5}}
                    variants={{
                        hidden:{opacity:0, y:-50},
                        visible:{opacity:1, y:0},
                    }}
                >
                    <form
                        target="_blank"
                        onSubmit={onSubmit}
                        method="POST"
                        action = 'https://formsubmit.co/elizade.natiq58@gmail.com' 
                    >
                        <input 
                            type="text"
                            className={inputStyles}
                            placeholder="Your name"
                            {...register("name",{
                                required:true,
                                maxLength:100,
                            })}

                        
                        />
                        {errors.name && (
                            <p className="mt-1 text-red-600">
                                {errors.name.type ==="required" && "This field is required." }
                                {errors.name.type === 'maxLength' && "Max length is 100 characters."}
                            </p>
                        )}
                        
                        <input 
                            type="text"
                            className={inputStyles}
                            placeholder="Email"
                            {...register("email",{
                                required:true,
                                pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}

                        
                        />
                        {errors.email && (
                            <p className="mt-1 text-red-600">
                                {errors.email.type ==="required" && "This field is required." }
                                {errors.email.type === 'pattern' && "Invalid email address!."}
                            </p>
                        )}

                        <textarea 
                            rows={4}
                            cols={50}
                            className={`${inputStyles} resize-none`}
                            placeholder="Message"
                            {...register("message",{
                                required:true,
                                maxLength:2000,
                            })}

                        
                        />
                        {errors.message && (
                            <p className="mt-1 text-red-600">
                                {errors.message.type ==="required" && "This field is required." }
                                {errors.message.type === 'maxLength' && "Max length is 2000 characters."}
                            </p>
                        )}

                        <button 
                            type="submit"
                            className="mt-5 rounded-lg bg-secondary-500 px-12 py-2 transition duration-500 hover:text-white font-bold"
                        >
                            SUBMIT
                        </button>
                    </form>

                </motion.div>
                
                <motion.div 
                    className="relative mt-16 basis-2/5 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true, amount:0.5}}
                    transition={{delay:0.2, duration:0.5}}
                    variants={{
                        hidden:{opacity:0, y:50},
                        visible:{opacity:1, y:0},
                    }}
                >
                    <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-10]">
                        <img 
                            className="w-full"
                            src={ContactUsPageGraphic} 
                            alt="Contact-Us-page-graphic" />
                    </div>

                </motion.div>

            </div>
        </motion.div>

    </section>
  )
}

export default ContactUs;