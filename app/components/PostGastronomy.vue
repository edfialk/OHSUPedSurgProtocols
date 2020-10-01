<template>
    <Page class="page">
        <ActionBar />

        <ScrollView>
            <StackLayout>
                <Label text="Post-Gastrostomy Placement Feeding" textWrap="true" class="h2 text-center" />
                <Label textWrap="true" text="(Laparoscopic or open approach):"></Label>
                <Label textWrap="true" text="POD#0: NPO with gastrostomy tube to gravity for four hours. At four hours post-op, begin Pedialyte, breast milk, or formula of choice at 1/3 continuous or bolus rate. Any patients able to take nutrition PO may resume their pre-admission diet and medications may be administered by G tube. Increase by 1/3 every 3-4 hours if tolerated to goal continuous or bolus rate. Patients who do not tolerate advancement of feeds should be assessed and an alternative feeding plan determined in discussion with the surgeon."></Label>
                <Label textWrap="true" text="POD#1: Patient at goal feeds by AM. Discharge anticipated on POD#1."></Label>
                <Label textWrap="true" text="* For patients who undergo gastrostomy tube placement as part of a larger abdominal operation, this protocol may not apply and feeding plan will be determined by the surgeon."></Label>

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
.h2 {
    font-weight: bold;
}
</style>