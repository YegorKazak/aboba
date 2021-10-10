var descriptionSlider = {
    left: null,
    right: null,

    img: null,
    text: null,
    number: null,

    currentIndex: 0,

    imgs: [],
    texts: [],
    numbers: [],

    start: function() {
        var that = this;

        this.left = document.getElementById("left");
        this.right = document.getElementById("right");

        this.img = document.getElementById("img");
        this.text = document.getElementById("text");
        this.number = document.getElementById("number");

        this.imgs.push("img/description__bottom.jpg");
        this.imgs.push("img/description__seams.jpg");
        this.imgs.push("img/description__valve.jpg");
        this.imgs.push("img/description__cassette.jpg");
        this.imgs.push("img/description__retainer.jpg");

        this.texts.push("Дно автоклава специально спроектировано и изготовлено методом холодной штамповки, по особой уникальной технологии. Форма дна с лазом применяется в промышленном и военном строении, увеличивает жесткость и предотвращает возможную деформацию под действием температуры и давления. Такая технологическая особенность однозначно позволяет выдерживать давление в баке до 3 атмосфер при консервации.");
        this.texts.push("Сварные швы в автоклаве располагаются на стенках бака, на 2 см ниже стыков, а не в углах, как было раньше. Благодаря этой конструктивной особенности обеспечивается абсолютная надежность и прочность соединения. Поэтому возможные протекания и разрывы в местах сварки просто исключаются. Автоклав работает на всех видах плит.");
        this.texts.push("Встроенный клапан аварийного сброса давления в 3 Bar обеспечивает безопасное приготовление мясных блюд, где требуется температура в 120 градусов. При возникновении избыточного давления клапан срабатывает и понижает его до допустимого значения. Сертифицированный точный манометр показывает давление, которое будет меняться при нагреве.");
        this.texts.push("Встроенный клапан аварийного сброса давления в 3 Bar обеспечивает безопасное приготовление мясных блюд, где требуется температура в 120 градусов. При возникновении избыточного давления клапан срабатывает и понижает его до допустимого значения. Сертифицированный точный манометр показывает давление, которое будет меняться при нагреве.");
        this.texts.push("Встроенный клапан аварийного сброса давления в 3 Bar обеспечивает безопасное приготовление мясных блюд, где требуется температура в 120 градусов. При возникновении избыточного давления клапан срабатывает и понижает его до допустимого значения. Сертифицированный точный манометр показывает давление, которое будет меняться при нагреве.");

        this.numbers.push("1");
        this.numbers.push("2");
        this.numbers.push("3");
        this.numbers.push("4");
        this.numbers.push("5");

        this.left.addEventListener("click", function() {
            that.slideLeft();
        });

        this.right.addEventListener("click", function() {
            that.slideRight();
        });
    },

    slideLeft: function() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.img.src = this.imgs[this.currentIndex];
            this.text.innerHTML = this.texts[this.currentIndex];
            this.number.innerHTML = this.numbers[this.currentIndex];
        } else if (this.currentIndex === 0){
            this.currentIndex = 4;
            this.img.src = this.imgs[this.currentIndex];
            this.text.innerHTML = this.texts[this.currentIndex];
            this.number.innerHTML = this.numbers[this.currentIndex];
        }
    },

    slideRight: function() {
        if (this.currentIndex < 4) {
            this.currentIndex++;
            this.img.src = this.imgs[this.currentIndex];
            this.text.innerHTML = this.texts[this.currentIndex];
            this.number.innerHTML = this.numbers[this.currentIndex];
        } else if (this.currentIndex === 4){
            this.currentIndex = 0;
            this.img.src = this.imgs[this.currentIndex];
            this.text.innerHTML = this.texts[this.currentIndex];
            this.number.innerHTML = this.numbers[this.currentIndex];
        }
    },
}

descriptionSlider.start();