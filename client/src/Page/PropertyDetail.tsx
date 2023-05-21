// import PropertyDetailLayout from "../Layout/PropertyDetailLayout"
// export default function PropertyDetail() {
//     return (
//         <>
//         <PropertyDetaiLayout>
//             <div className="px-8">
//                 <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
//                 Back End Developer
//                 </h2>
//             </div>
//         </PropertyDetailLayout>
//       </>
//       )

import PropertyDetailLayout from "../Layout/PropertyDetailLayout";
import { Comment, PDContents, PDFeaturedSection } from "../component";


export default function PropertyDetail(){
    return (
        <>
            <PropertyDetailLayout>
                <PDContents />
                <PDFeaturedSection />
                <Comment />
            </PropertyDetailLayout>
        </>
    )
}