<template>
    <Page class="page">
        <ActionBar />

        <StackLayout>
            <Label text="Management of Anterior Mediastinal Masses" textWrap="true" class="h2" />
            <ImageZoom src="~/images/mediastinal.png" maxZoom="5" minZoom="1" width="100%" height="100%" />
        </StackLayout>
    </Page>
</template>

<script>

import ActionBar from './ActionBar';

export default {

    components: { ActionBar }

}

</script>

<style>
</style>