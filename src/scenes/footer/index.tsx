import Logo from "@/assets/Logo.png";

function Footer() {
  return (
    <footer
        className="bg-primary-100 py-16" 
    >
        <div
            className="justify-center mx-auto w-5/6 gap-16 md:flex"
        >
            <div className="mt-16 basis-1/2 md:mt-0">
                <img src={Logo} alt="Logo" />
                <p className="my-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempora ea impedit blanditiis reiciendis adipisci odit. Aliquam aperiam reprehenderit labore omnis atque nesciunt!
                </p>
                <p>&copy; Evogym All Rights Reserved. </p>

            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4> 
                <a href="#" className="my-5 block hover:text-primary-500">Lorem ipsum dolor sit.</a>
                <a href="#" className="my-5 block hover:text-primary-500">Lorem consectetur adipisicing.</a>
                <a href="#" className="block hover:text-primary-500">Ulamcorper vivamus</a>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact Us</h4> 
                <p className="my-5">Lorem ipsum dolor , adipisicing elit. Dignissimos, numquam?</p>
                <a href="tel:+994 435-68-25">(+994) 435-68-25</a>
                
            </div>
        </div>
        
    </footer>
  )
}

export default Footer