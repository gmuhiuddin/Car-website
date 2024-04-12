let carNamefunction = document.getElementById('carNameButton');

carNamefunction.addEventListener("click", carNameFunc);

function carNameFunc() {
    let carNameInput = document.getElementById('carNameInput').value;
    let carModelInput = document.getElementById('carModelInput').value;
    let carColorInput = document.getElementById('carColorInput').value;
    let carIsNewInput = document.getElementById('carIsNewInput').value;
    let carUsedInput = document.getElementById('carUsedInput').value;


    let carName = document.getElementById('carName');
    let carModel = document.getElementById('carModel');
    let carColor = document.getElementById('carColor');
    let carIsNew = document.getElementById('carIsNew');
    let carIsUsed = document.getElementById('carIsUsed');

    if (carNameInput.length >= 3 && carModelInput.length >= 3 && carColorInput.length >= 3 && carIsNewInput.length >= 2 && carUsedInput.length >= 3) {
        let carDetail = {
            name: carNameInput,
            model: carModelInput,
            color: carColorInput,
            isNew: carIsNewInput,
            usedBy: carUsedInput,
        }
        carName.innerText = carDetail.name
        carModel.innerText = carDetail.model
        carColor.innerText = carDetail.color
        carIsNew.innerText = carDetail.isNew
        carIsUsed.innerText = carDetail.usedBy
    }
    else {
        carName.innerText = "Enter please full detail"
        carModel.innerText = "Enter please full detail"
        carColor.innerText = "Enter please full detail"
        carIsNew.innerText = "Enter please full detail"
        carIsUsed.innerText = "Enter please full detail"
    }
};