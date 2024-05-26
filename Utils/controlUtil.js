function addFrustumControl(...args) {
    for (let i = 1; i < args.length; i++) {
        const frustumControl = document.createElement('div')
        const labelEl = document.createElement('label')
        const inputEl = document.createElement('input')
        const spanEl = document.createElement('span')
        labelEl.innerText = args[i].name
        frustumControl.appendChild(labelEl)
        inputEl.type = 'range'
        inputEl.value = args[i].value
        inputEl.addEventListener('change', () => {
            spanEl.innerText = inputEl.value
            applyChanges(args[0], args[i].name, parseFloat(inputEl.value))
        })
        inputEl.min = args[i].min ? args[i].min : 0
        inputEl.max = args[i].max ? args[i].max : 100
        inputEl.step = args[i].step ? args[i].step : 1
        frustumControl.appendChild(inputEl)
        spanEl.innerText = args[i].value
        frustumControl.appendChild(spanEl)
        document.body.appendChild(frustumControl)
    }
}
function applyChanges(f, name, value) {
    switch (name) {
        case 'Convergence':
            f.mConvergence = value
            break;
        case 'Eye Separation':
            f.mEyeSeparation = value
            break;
        case 'Field Of View':
            f.mFOV = value
            break;
        case 'Near Clipping Distance':
            f.mNearClippingDistance = value
            break;
        default:
            return;
    }
    draw();
}