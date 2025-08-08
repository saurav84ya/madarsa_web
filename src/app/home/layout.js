import Header from "@/components/client/header";


export default function Layout({ children }) {
  return (
    <div >
        <Header/>
     
    <div className="max-w-7xl  mx-auto px-3 md:px-7 " >
          {children}
     </div>
    </div>
  );
}