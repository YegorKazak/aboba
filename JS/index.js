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

        this.imgs.push("img/bottom.jpg");
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

var specificationsSlider = {
    left: null,
    right: null,

    img: null,
    title: null,
    text: null,
    number: null,

    currentIndex: 0,

    imgs: [],
    titles: [],
    texts: [],
    numbers: [],

    start: function() {
        var that = this;

        this.left = document.getElementById("specificationsLeft");
        this.right = document.getElementById("specificationsRight");

        this.img = document.getElementById("specificationsImg");
        this.title = document.getElementById("specificationsTitle");
        this.text = document.getElementById("specificationsText");
        this.number = document.getElementById("specificationsNumber");

        this.imgs.push("img/specifications__tank.jpg");
        this.imgs.push("img/specifications__valve.jpg");
        this.imgs.push("img/specifications__manometr.jpg");
        this.imgs.push("img/thermometer.jpg");
        this.imgs.push("img/specifications__vents.jpg");
        this.imgs.push("img/specifications__crossbar.jpg");
        this.imgs.push("img/specifications__compound.jpg");
        this.imgs.push("img/specifications__cassette.jpg");
        this.imgs.push("img/specifications__tap.jpg");
        this.imgs.push("img/specifications__walls.jpg");
        this.imgs.push("img/specifications__pens.jpg");
        this.imgs.push("img/bottom.jpg");

        this.titles.push("Основной бак");
        this.titles.push("Клапан аварийного сброса давления");
        this.titles.push("Манометр");
        this.titles.push("Электрический термометр");
        this.titles.push("Вентили на крышке");
        this.titles.push("Перекладина");
        this.titles.push("Кламповое соединение");
        this.titles.push("Кассеты для банок");
        this.titles.push("Сливной кран");
        this.titles.push("Стенки бака 1.5 мм");
        this.titles.push("Усиленные металлические ручки");
        this.titles.push("Диффузное дно 2 мм, с лазом");

        this.texts.push("для загрузки кассет с банками и залива жидкости");
        this.texts.push("обеспечивает максимальную температуру при готовке мяса и позволяет избежать превышения допустимых показателей");
        this.texts.push("для контроля текущего состояния давления внутри аппарата во время использования");
        this.texts.push("для контроля температурного режима, в зависимости от рецептуры");
        this.texts.push("ручные болты для фиксации крышки бака во время приготовления продукта");
        this.texts.push("позволяет держать крышку и вентили при установке и сборке автоклава");
        this.texts.push("надежно фиксирует колонну диаметром 38мм, в случае использования автоклава в качестве самогонного аппарата");
        this.texts.push("для удобства загрузки банок и предотвращения срыва крышек на них");
        this.texts.push("универсальная система охлаждения. Всё, что нужно - просто слить воду и автоклав остынет гораздо быстрее.");
        this.texts.push("обеспечивают прочность и герметичность конструкции");
        this.texts.push("для переноса автоклава (не нагреваются)");
        this.texts.push("работает на всех типах плит");

        this.numbers.push("1");
        this.numbers.push("2");
        this.numbers.push("3");
        this.numbers.push("4");
        this.numbers.push("5");
        this.numbers.push("6");
        this.numbers.push("7");
        this.numbers.push("8");
        this.numbers.push("9");
        this.numbers.push("10");
        this.numbers.push("11");
        this.numbers.push("12");

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
            this.title.innerHTML = this.titles[this.currentIndex];
            this.text.innerHTML = this.texts[this.currentIndex];
            this.number.innerHTML = this.numbers[this.currentIndex];
        } else if (this.currentIndex === 0){
            this.currentIndex = 11;
            this.img.src = this.imgs[this.currentIndex];
            this.title.innerHTML = this.titles[this.currentIndex];
            this.text.innerHTML = this.texts[this.currentIndex];
            this.number.innerHTML = this.numbers[this.currentIndex];
        }
    },

    slideRight: function() {
        if (this.currentIndex < 11) {
            this.currentIndex++;
            this.img.src = this.imgs[this.currentIndex];
            this.title.innerHTML = this.titles[this.currentIndex];
            this.text.innerHTML = this.texts[this.currentIndex];
            this.number.innerHTML = this.numbers[this.currentIndex];
        } else if (this.currentIndex === 11){
            this.currentIndex = 0;
            this.img.src = this.imgs[this.currentIndex];
            this.title.innerHTML = this.titles[this.currentIndex];
            this.text.innerHTML = this.texts[this.currentIndex];
            this.number.innerHTML = this.numbers[this.currentIndex];
        }
    },
}

descriptionSlider.start();
specificationsSlider.start();