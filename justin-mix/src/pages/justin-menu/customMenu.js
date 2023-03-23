
import Image from 'next/image'
import NavBar from '../../../components/navbar';
import CocktailList from '../../../components/cocktailList';

export default function CustomMenu() {

    return (
        <>
            <NavBar>
                <div className="d-flex justify-content-center">
                    
                    <div style={{position: "relative", width: "60%", height: "170px"}}>
                        <Image 
                            src="/images/logo_full.png"
                            alt="justin_logo"
                            fill
                        />
                    </div>
                </div>
                <h1 className="d-flex justify-content-center">Menu</h1>
                <CocktailList></CocktailList>
            </NavBar>
        </>
      );
  }
  