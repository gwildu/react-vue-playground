<template>
    <div class="ric-card">
        <header class="ric-card__header">
            <h1>I'm Vue</h1>
        </header>
        <div class="ric-card__content">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss">
    .ric-card {
        box-shadow: 3px 3px 10px 5px rgba(0, 0, 0, .5);
        margin: 30px;
        &__header {
            padding: 10px;
            border-bottom: 1px solid black;
            h1 {
                margin: 0;
            }
        }
        &__content {
            padding: 10px;
        }
    }
</style>