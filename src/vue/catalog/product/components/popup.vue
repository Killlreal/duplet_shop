<template lang = "pug">
.popup__card__item
  .wrapper
    .popup__body
      .popup__content
        figure.close__popup.icon-menu-cancel
        img.popup__img(src='/assets/img/booked.svg' alt='')
        span.popup__title Ваш товар зарезервирован в корзине
        .popup__info
          span.poup__info_important Примичание!
          span.poup__info_text Граждане РФ имеют право приобретать огнестрельное гладкоствольное длинноствольное оружие на основании лицензии
          a.popup__info_link(href='#') (Федеральный закон от 13.12.1996 N 150-ФЗ (ред. от 02.08.2019) "Об оружии")
        a.btn(href='#')
          span.btn__name в корзину
</template>

<script>
export default {
	data(){
		return {}
	},
	computed: {

	},
	methods: {

	},
	created(){

	}
}
</script>