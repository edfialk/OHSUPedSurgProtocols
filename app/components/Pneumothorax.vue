<template>
    <Page class="page">
        <ActionBar />

        <ScrollView>
            <StackLayout>
                <Label text="Management of Spontaneous Pneumothorax" textWrap="true" class="h2 text-center" />

                <Label textWrap="true">• Small PTXs deserves observation</Label>
                <Label textWrap="true">• If large (greater than 20%), place tube thoracostomy</Label>
                <Label textWrap="true" class="indent">– 8F Furman catheter, aspirate air out on placement</Label>
                <Label textWrap="true" class="indent">– If lung not up replace with larger or second tube. If lung up,then proceed to next step</Label>
                <Label textWrap="true" class="indent">– Tube to suction for 24 hrs then to water seal</Label>
                <Label textWrap="true">• DC tube after 4 hrs if no air leak</Label>
                <Label textWrap="true">• If persistent air leak at POD 3, put to suction</Label>
                <Label textWrap="true">• If persistent air leak at POD 4, to OR </Label>
                <Label textWrap="true" class="indent">– Blebectomy or apical resection (if no bleb) with apical pleurectomy +/- mechanical pleurodesis</Label>
                <Label textWrap="true">• If recurrent ptx, to OR </Label>
                <Label textWrap="true">• Blebectomy or apical resection (if no bleb) with apical pleurectomy +/- mechanical pleurodesis</Label>

                <ImageZoom src="~/images/Pneumothorax.png" maxZoom="5" minZoom="1" width="100%" height="400" />

            </StackLayout>
        </ScrollView>
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