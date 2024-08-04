//Promises Async - Await

const preHeatOven = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const preHeatOven = true;
            if(preHeatOven){
                resolve('Oven is 180deg')
            } else {
                reject('Task one failed')
            }
        }, 1000);
    }) 
};
const addSugarAndChocoChips = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const chocoAdded = true;
            if(chocoAdded){
                resolve('Sugar and choco added')
            } else {
                reject('Task two failed')
            }
        }, 1000);
    }) 
};
const bakeMixture = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const bakeMixtured = true;
            if(bakeMixtured){
                resolve('Bake is mixtured successfully')
            } else {
                reject('Task three failed')
            }
        }, 1000);
    }) 
};

const bakeChocolateBrownies = async () => {
    try {
        const preHeatResult = await preHeatOven();
            console.log(preHeatResult);
        const sugarAndChocoResult = await addSugarAndChocoChips();
            console.log(sugarAndChocoResult);
        const bakeMixtureResult = await bakeMixture();
            console.log(bakeMixtureResult);
        console.log('Brownies are ready');
    } catch (error) {
        console.error(error);
    }
}
bakeChocolateBrownies();