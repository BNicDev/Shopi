import { useContext} from "react"
import Layout from "../../Components/Layout"
import Card from "../../components/Card"
import ProductDetail from "../../components/ProductDetail"
import { ShopiCartContext } from '../../Context'
function Home() {
  const context = useContext(ShopiCartContext)

  const renderView = ()=>{
      if(context.filteredItems?.length>0){
        return(
          context.filteredItems?.map(item => (
            <Card key={item.id} data={item} />
          ))
        )
      }else{
        return <p className="text-center text-3xl mt-16">No items found</p>
      }
    }
    return (
      <Layout>
         <div className='flex items-center justify-center relative w-80 mb-2'>
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input type="text" placeholder="Search" className="rounded-lg border-black w-80 p-4 mb-4 focus:outline-none" onChange={(event)=>context.setSearchByTitle(event.target.value)} />
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
          {renderView()}
      </div>
      < ProductDetail/>
      </Layout>
    )
  }
  
  export default Home
  