import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page:string,
    selectedPage:SelectedPage,
    setselectedPage:(value: SelectedPage) => void;
}

const Link = ({
    page,
    selectedPage,
    setselectedPage,

}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g,'') as SelectedPage;

  return (
    <AnchorLink
        href={`#${lowerCasePage}`}
        className={`${selectedPage === lowerCasePage ? "text-red-500": ""}
            transition duration-500 hover:text-red-300
        `}
        onClick={()=>setselectedPage(lowerCasePage)}
    >
        {page}
    </AnchorLink>
  )
}

export default Link