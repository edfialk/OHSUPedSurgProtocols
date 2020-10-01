<template>
    <ActionBar>
        <StackLayout orientation="horizontal"
            ios:horizontalAlignment="center"
            android:horizontalAlignment="left"
            @tap="goBack">
            <Label text.decode="&#xf053;" class="fas" horizontalAlignment="center" verticalAlignment="center" style="font-size: 16;"/>
            <Label text="Back" textWrap="true" horizontalAlignment="center" verticalAlignment="center" class="action-label" />
        </StackLayout>
    </ActionBar>
</template>

<script>
    export default {
        methods: {
            goBack() {
                this.$navigateBack();
            }
        }
    };
</script>

<style scoped>
</style>