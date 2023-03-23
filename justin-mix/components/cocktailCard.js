
// REACT NEXT IMPORTS
import React, { useEffect } from 'React'
import Image from 'next/image'
import styles from './cocktailcard.module.css'
import anime from 'animejs'

export default function CocktailCard(props) {

    const record = props.value;

    const flavors = record.flavors.map((flavor, ifla) => 
        <div key={ifla} style={{paddingLeft: "3px", paddingRight: "3px"}}>{flavor}</div>
    );

    const recipe = record.recipe.map((ingr, iing) => 
        <li key={iing}>{ingr}</li>
    );

    // TODO
    /*
    useEffect(() => {
        
        anime({
            targets: '.cocktailCard .container',
            height: el => el.scrollHeight,
            easing: 'linear',
            duration: 300,
            delay: (el, i) => {
                return 100 + 510 * i;
            }
        });
        anime({
            targets: '.cocktailCard',
            backgroundColor: '#000',
            duration: 10,
            delay: (el, i) => {
                return 400 + 510 * i;
            }
        });
        anime({
            targets: '.container',
            opacity: [0, 1],
            duration: 10,
            delay: (el, i) => {
                return 400 + 510 * i;
            }
        });
    }, [])*/

    return (
        <>
            <div className={styles.cardTab}>
                <div className="d-flex justify-content-between">
                    <div>//{record.name}</div>
                    <div>  </div>
                    <div>[X]</div>
                </div>
            </div>
            <div className={styles.cocktailCard}>
                <div className={styles.container}>
                    <div className={styles.titleLine}>
                        <div className={styles.titleSpacer}></div>
                        <div className={styles.title}>
                            <h2><strong>{record.name}</strong> - PRIX</h2>
                        </div>
                        <div className={styles.titleSpacer}></div>
                    </div>
                    <div className={styles.recipeCard}>
                        <div className="col-sm-3">
                        IMAGE        
                        </div>
                        <div className="col-sm">
                            <div className="d-flex flex-row ${styles.recipeFlavor}">
                                [{ flavors }]
                            </div>
                            <div className={styles.recipe}>
                                <ul>
                                    {recipe}
                                </ul>
                                [MIX = {record.shakeStyle}] ; [GLASS = {record.glass}] ; [ICE = {record.ice}] ; [GARNISH = garnish]
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    
    )
}