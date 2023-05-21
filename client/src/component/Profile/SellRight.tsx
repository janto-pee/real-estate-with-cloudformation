interface SellerRightInterface {
    classes: string
} 
export default function SellRight({classes}: SellerRightInterface) {
  return (
    <div className={`hidden md:flex bg-gary-600 min-h-screen background-sidebar ${classes}`}>
        <div>
        {/* <h1 className="mt-4 mb-12 text-3xl text-white">Post your property for free</h1>
        <p>Connect with the largest community of people seeking good properties</p> */}
        </div>
      
    </div>
  )
}
