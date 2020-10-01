<template>
    <Page class="page">
        <ActionBar />

        <ScrollView>
            <StackLayout>
                <Label text="Management of Small Bowel Obstruction" textWrap="true" class="h2 text-center" />

                <Label textWrap="true">Inclusion criteria (must have all 3): </Label>
                <Label textWrap="true" class="indent" text.decode="&#x2022; Prior abdominal operation"></Label>
                <Label textWrap="true" class="indent" text.decode="&#x2022; Clinical and radiographic evidence of adhesive small bowel obstruction"></Label>
                <Label textWrap="true" class="indent" text.decode="&#x2022; Documented urine output"></Label>
                <Label textWrap="true">Exclusion criteria (can not have ANY of the following): </Label>
                <Label textWrap="true" class="indent" text.decode="&#x2022; Non-reducible hernia"></Label>
                <Label textWrap="true" class="indent" text.decode="&#x2022; Allergy or hypersensitivity to contrast agents"></Label>
                <Label textWrap="true" class="indent" text.decode="&#x2022; Inflammatory bowel disease"></Label>
                <Label textWrap="true" class="indent" text.decode="&#x2022; Documented history of aspiration or intra-abdominal malignancy"></Label>
                <Label textWrap="true" class="indent" text.decode="&#x2022; < 4 weeks since last abdominal operation"></Label>
                <Label textWrap="true" class="indent" text.decode="&#x2022; < 1 year of age, any clinical signs of intestinal ischemia (fever > 38, tachycardia, peritonitis, leukocytosis, lactic acidosis)"></Label>
                <Label textWrap="true" class="indent" text.decode="&#x2022; Signs of significant dehydration (BUN/Cr >30, Cl<100, CO2>30)"></Label>

                <Label textWrap="true" class="m-t-20">If meet criteria:</Label>
                <Label textWrap="true">1. Place NG tube to low intermittent suction for decompression.</Label>
                <Label textWrap="true">2. Initiate D5 ½ NS + 20mEq KCl @ 1.5 maintenance rate</Label>
                <Label textWrap="true">3. Administer 20ml/kg NS bolus</Label>
                <Label textWrap="true">4. Notify radiology of planned Gastrograffin study to evaluate for adhesive small bowel obstruction</Label>
                <Label textWrap="true">5. Order 1ml/kg (max 100ml) Gastrograffin to bedside (for children 1-2 years of age, dilute 2 gastrograffin:1 water)</Label>
                <Label textWrap="true">6. After 4 hours of gastric decompression, administer Gastrograffin via NG tube. Clamp tube for 3 hours; if patient vomits or complains of worsening abdominal pain, place back to suction</Label>
                <Label textWrap="true">7. After 3 hours, place NG back to suction</Label>
                <Label textWrap="true">8. Obtain abdominal x-ray 4 hours after administration of Gastrograffin</Label>
                <Label textWrap="true">9. If contrast not visualized in colon after 4 hours, repeat abdominal x-ray in 24 hours</Label>
                <Label textWrap="true">10. If contrast not visualized in colon at 24 hours, obstruction is unlikely to resolve.</Label>

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