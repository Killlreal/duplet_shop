<template lang="pug">
section.reserved
    .wrapper
        .reserved__title Забронированные товары
        .reserved__box
            .name__box
                .subtitles__thing.name__title Товар
                .subtitles__address.name__title адрес получения
                .subtitles__info.name__title Подробности получения
                .subtitles__cost.name__title Стоимость
                .subtitles__status.name__title Статус заказа
            .reserved__things
                .card
                    .card__des.card__info
                        .card__wrap
                            .card__img
                                .product
                                    .discount__percent 15%
                                    .favorite__cross.icon-menu-cancel
                                    .product__block
                                        img.product__img(src=("/assets/img/gun.png"), alt="Ружьё")
                            .card__text
                                .card__text_title САПОГИ РЫБАЦКИЕ НАЗИЯ ЭВА С ЧУЛ. ТРИПЛЕКС АРТ. С095 (РАЗМЕР 46)
                                .card__text_block
                                    .card__brand
                                        .card__brand_title Бренд:
                                        .card__brand_name ТОЗ
                                    .card__caliber
                                        .card__caliber_title Калибр:
                                        .card__caliber_name 12/70
                                .status__mobile
                                    .status__mobile_title Статус:
                                    .status__mobile_wrap
                                        .status__done  Готово для получения
                                        .status__building.hidden Сборка
                        .card__information
                            figure.icon-info
                            .card__information__text Информация
                    .card__address.card__info
                        .street ул. Южная 6 (40-00-70)
                        .work__time
                            .work__time_title Режим работы:
                            .date
                                .week Пн-Пт
                                .time 10:00 - 19:00
                            .date
                                .week Сб, Вс
                                .time 10:00 - 17:00
                    .card__reception.card__info
                        .get__thing  Товар будет доступен для получения с
                            span.get__thing_date 25.09.2020
                        .booked__thing  Бронь закрепляется за Вами до
                            span.booked__thing_date 25.09.2020
                    .card__cost.card__info ₽ 3 000 000
                    .card__status.card__info
                        .status__done.hidden__status  Готово для получения
                        .status__building Сборка
</template>
<script>
export default {
    data() {
        return {};
    },
    async created(){
        this.$emit('toggleLoad', { component: 'reserved', value: true})
    }
};
</script>
