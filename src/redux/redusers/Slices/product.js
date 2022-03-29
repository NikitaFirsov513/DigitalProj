import { createSlice } from '@reduxjs/toolkit'



export const productSlice = createSlice({


    name: "product",
    initialState: {

        productAllList: null,
        activeElement: null,
        activeImage: null,
        memoryList: null,
        colorsList: null,

        inCompare: false,
        inFavorites: false,
        inGrosery: false,



        //Slider
        sliderActive: 0,
        sliderWidth: 350,
        colElement: null,
        margin: 0,





    },

    reducers: {

        toggleInCompare: (state, action) => {
            const inCompare = JSON.parse(JSON.stringify(state, undefined, 2)).inCompare;
            state.inCompare = !inCompare;


        },

        toggleInFavorites: (state, action) => {

            const inFavorites = JSON.parse(JSON.stringify(state, undefined, 2)).inFavorites;
            state.inFavorites = !inFavorites;
        },
        setCompare: (state, action) => {

            //console.log("я сработал")
            const compareList = action.payload[0];
            const activeElement = JSON.parse(JSON.stringify(state, undefined, 2)).activeElement;

            if (activeElement === null || compareList.length === 0) {
                //console.log("1")

                state.inCompare = false;
                return;

            }

            const isFindCategory = compareList.some(e => {
                return e.categoryName === activeElement['ТоварКатегорияНаименование'];
            })

            if (!isFindCategory) {
                //console.log("2")

                state.inCompare = false;
                return;

            }

            let isFindElement;

            compareList.forEach((e) => {


                if (e.categoryName === activeElement['ТоварКатегорияНаименование']) {
                    isFindElement = e.productList.some(elem => elem['ТоварНаименование'] === activeElement['ТоварНаименование'])

                }
            })
            //console.log("3")
            //console.log(isFindElement)
            state.inCompare = isFindElement;





        },
        toggleGrosary: (state, action) => {
            const inGrosery = JSON.parse(JSON.stringify(state, undefined, 2)).inGrosery;
            state.inGrosery = !inGrosery;

        },
        setGrosary: (state, action) => {

            //console.log("setGrosary")
            const grosaryList = action.payload;
            const activeElement = JSON.parse(JSON.stringify(state, undefined, 2)).activeElement;

            if (activeElement === null || grosaryList === null)
                return;

            const isFindGrosary = grosaryList.some((elem) => {
                
                //console.log("elem>>"+elem['ТоварНаименование'])
                //console.log("activeElement>>"+activeElement['ТоварНаименование'])

                return elem['ТоварНаименование'] === activeElement['ТоварНаименование']
            })
            
            

            if (isFindGrosary) {
                state.inGrosery = true;
            }
            else {
                state.inGrosery = false;

            }


        },

        setSliderDefault: (state, action) => {


            const activeElement = JSON.parse(JSON.stringify(state, undefined, 2)).activeElement;
            const sliderActive = JSON.parse(JSON.stringify(state, undefined, 2)).sliderActive;

            document.getElementById('slider').style.marginLeft = - 0 + "px";

            if (activeElement == null)
                return;

            state.sliderActive = 0;
            state.colElement = activeElement['ТоварURLИзображений'].length - 1;
            state.margin = 0;

        },

        sliderRight: (state, action) => {

            let sliderActive = JSON.parse(JSON.stringify(state, undefined, 2)).sliderActive;
            const colElement = JSON.parse(JSON.stringify(state, undefined, 2)).colElement;
            let margin = JSON.parse(JSON.stringify(state, undefined, 2)).margin;

            if (sliderActive >= colElement)
                return;

            document.getElementById('slider').childNodes[sliderActive].classList.toggle("product__image-sub-list-element--active")
            sliderActive++;
            document.getElementById('slider').childNodes[sliderActive].classList.toggle("product__image-sub-list-element--active")

            const newMargine = (sliderActive * 87) - margin;


            if (newMargine > 350) {
                margin += 87;
                document.getElementById('slider').style.marginLeft = - margin + "px";
            }

            state.sliderActive = sliderActive;
            state.margin = margin;

        },

        sliderLeft: (state, action) => {

            let sliderActive = JSON.parse(JSON.stringify(state, undefined, 2)).sliderActive;;
            const colElement = JSON.parse(JSON.stringify(state, undefined, 2)).colElement;;
            let margin = JSON.parse(JSON.stringify(state, undefined, 2)).margin;;

            if (sliderActive <= 0)
                return;

            document.getElementById('slider').childNodes[sliderActive].classList.toggle("product__image-sub-list-element--active")
            sliderActive--;
            document.getElementById('slider').childNodes[sliderActive].classList.toggle("product__image-sub-list-element--active")

            const newMargine = (sliderActive * 87) - margin;

            if (newMargine < 0) {
                margin -= 87;
                document.getElementById('slider').style.marginLeft = - margin + "px";
            }

            state.sliderActive = sliderActive;
            state.margin = margin;
            console.log('sliderLeft')

        },
        sliderClick: (state, action) => {


            const id = action.payload;
            let sliderActive = JSON.parse(JSON.stringify(state, undefined, 2)).sliderActive;;
            const colElement = JSON.parse(JSON.stringify(state, undefined, 2)).colElement;;
            let margin = JSON.parse(JSON.stringify(state, undefined, 2)).margin;;

            document.getElementById('slider').childNodes[sliderActive].classList.toggle("product__image-sub-list-element--active")
            sliderActive = id;
            document.getElementById('slider').childNodes[sliderActive].classList.toggle("product__image-sub-list-element--active")

            state.sliderActive = sliderActive;



        },






        setProductAllList: (state, action) => {

            state.productAllList = action.payload;
        },
        setActiveElement: (state, action) => {

            const productAllList = JSON.parse(JSON.stringify(state, undefined, 2)).productAllList;;
            const name = action.payload;

            if (productAllList == null)
                return;


            productAllList.forEach(element => {

                if (element['ТоварНаименование'] == name) {
                    state.activeElement = element;
                    state.activeImage = element['ТоварURLИзображений'][0]
                    return;
                }

            })



        },
        setMemoryList: (state, action) => {

            const productAllList = JSON.parse(JSON.stringify(state, undefined, 2)).productAllList;
            const activeElement = JSON.parse(JSON.stringify(state, undefined, 2)).activeElement;
            let memoryList = [];
            let colorsList = [];

            //console.log(activeElement)

            if (productAllList == null)
                return;

            const isSmarthone = activeElement['ТоварКатегорияURLName'] == "smartphone";
            const isTablet = activeElement['ТоварКатегорияURLName'] == "tablet";

            //console.log(isSmarthone)
            //console.log(isTablet)


            if (!isSmarthone && !isTablet) {
                return;
            }

            productAllList.forEach(element => {

                const isBrand = activeElement['ТоварБрендНаименование'] === element['ТоварБрендНаименование']
                const isModel = activeElement['ТоварМодель'] === element['ТоварМодель']
                let someMemoryIndex = memoryList.some(memoryElement => memoryElement.value === element['ТоварПамять'])

                if (!someMemoryIndex && isBrand && isModel) {
                    memoryList.push(
                        {
                            value: element['ТоварПамять'],
                            name: element['ТоварНаименование']
                        });
                }

                const isMemory = activeElement['ТоварПамять'] === element['ТоварПамять']
                let someColorsIndex = colorsList.some
                    (colorsElement =>
                        colorsElement['colorName'] === element['ТоварЦветНаименование'])
                if (isMemory && !someColorsIndex && isBrand && isModel) {

                    colorsList.push({
                        hex: element['ТоварЦветhex'],
                        colorName: element['ТоварЦветНаименование'],
                        productName: element['ТоварНаименование'],
                    })
                }





            })

            state.memoryList = memoryList;
            state.colorsList = colorsList;
            state.colElement = activeElement['ТоварURLИзображений'].length - 1;

            // console.log(colorsList)


        },
        setColorsList: (state, action) => {

        },













    }


})


export const { setGrosary,
    toggleGrosary,
    toggleInCompare,
    toggleInFavorites,
    setCompare,
    setSliderDefault,
    sliderRight,
    sliderLeft,
    sliderClick,
    setProductAllList,
    setActiveElement,
    setMemoryList,
    setColorsList,

} = productSlice.actions;

export default productSlice.reducer;