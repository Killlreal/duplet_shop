<template lang = "pug">
.news_wrapper
	.news__block
		.img__item
			img.img__news(:src="newsItem[0].picture" alt='')
		.news__block_instruction
			.news__title {{ newsItem[0].title }}
			.news__text {{ newsItem[0].announce }}
			.news__card_read
				a.btn(:href='newsItem[0].pageRef')
					span.btn__name Читать
				span.news__data
					figure.icon-data
					.news__data_title {{ format(item.creationDate) }}
	.news__cards
		.news__card(v-for="(item, index) in newsItem" v-if = "index !=0")
			.img__item
				img.img__news(:src="item.picture" alt='')
			.news__title {{ item.title }}
			.news__text {{ newsItem[0].announce }}
			.news__card_read
				a.btn(:href='newsItem[0].pageRef')
					span.btn__name Читать
				span.news__data
					figure.icon-data
					.news__data_title {{ format(item.creationDate) }}
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        format(toFormat) {
            let [date, time] = toFormat.split(" ");
            let [year, month, day] = date.split("-");
            return `${day}.${month}.${year}`;
        }
    },
    props: {
        newsItem: Array
    }
};
</script>