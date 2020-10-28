class Checker {
    constructor() {
        this.elemRules = {
            'name': /\w+/i,
            'phone': /\+7\(\d{3}\)\d{3}-\d{4}/,
            'email': /[\w.-]+@\w+\.\w+/i,
        };
        this.errorMessages = {
            'name': 'Имя может состоять только из букв!',
            'phone': 'Формат телефона: +7(000)000-0000!',
            'email': 'Почта должна иметь вид mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru.',
        };
        this.elemsToVerify = Object.keys(this.elemRules).map( (item) => {
            return document.getElementById(item)
        });

        this.isValid = false;
        this._verify();
    }

    _verify() {
        let errorElems = document.querySelectorAll('.error-message');
        for (let err of [...errorElems]) {
            err.remove();
        }
        for (let elem of this.elemsToVerify) {
            elem.classList.remove('error');
            if (!this.elemRules[elem.name].test(elem.value)) {
                elem.classList.add('error');
                elem.parentNode.insertAdjacentHTML('beforeend', `<p class="error-message">${this.errorMessages[elem.name]}</p>`);
            }
        }
        if (!document.querySelectorAll('.error').length) {
            this.isValid = true;
        }
    }
}

window.onload = () => {
    document.getElementById('main').addEventListener('submit', event => {
        const check = new Checker();
        if(!check.isValid){
            event.preventDefault();
        }
    })
}