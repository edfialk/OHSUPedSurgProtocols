<template>
    <Page class="page">
        <ActionBar />

        <ScrollView>
            <StackLayout>
                <Label text="Management of Ileocolic Intussusception" textWrap="true" class="h2" />
                <ImageZoom src="~/images/Ileocolic.png" maxZoom="5" minZoom="1" height="400" />

                <Label textWrap="true" text.decode="&bull; Exclusion Criteria"></Label>
                <Label textWrap="true" class="indent" text="- Absolute:"></Label>
                <Label textWrap="true" class="indent-2" text.decode="&bull; Peritonitis"></Label>
                <Label textWrap="true" class="indent-2" text.decode="&bull; Instability during 1st attempt"></Label>
                <Label textWrap="true" class="indent" text="- 2 of the following 3:"></Label>
                <Label textWrap="true" class="indent-2" text.decode="&bull; Elevated WBC"></Label>
                <Label textWrap="true" class="indent-2" text.decode="&bull; High fever"></Label>
                <Label textWrap="true" class="indent-2" text.decode="&bull; Length of symptoms > 72 hrs"></Label>

                <Label textWrap="true" text.decode="&bull; May try multiple times during initial attempt"></Label>
                <Label textWrap="true" text.decode="&bull; Candidates for repeat delayed attempt (if incompletely reduced on first attempts)"></Label>
                <Label textWrap="true" class="indent" text="- Clinically stable and not sick"></Label>
                <Label textWrap="true" class="indent" text="- Intussusception moves during initial attempt"></Label>
                <Label textWrap="true" text.decode="&bull; Next attempt:"></Label>
                <Label textWrap="true" class="indent" text="- Timing to be determined by attending pediatric radiologist"></Label>
                <Label textWrap="true" class="indent" text="- If 1st attempt overnight, book for 1st case in am"></Label>
                <Label textWrap="true" class="indent-2" text.decode="&bull; Write Epic order for repeat air enema at 8:00 am"></Label>
                <Label textWrap="true" class="indent-2" text.decode="&bull; Call radiology tech at 7:30 am to inform of plan"></Label>
                <Label textWrap="true" class="indent" text="- IV hydration and admission to ward"></Label>
                <Label textWrap="true" class="indent" text="- Obtain repeat U/S prior to reattempt at reduction"></Label>
                <Label textWrap="true" text.decode="&bull; If repeat reduction fails to move intussuceptum, to OR"></Label>

                <Label textWrap="true" class="ul bold" text="Protocol following successful radiographic/enema reduction of ileocolic intussusception"></Label>
                <Label textWrap="true" text="(Determining ED observation vs floor admission)"></Label>
                <Label textWrap="true" text.decode="&bull; Admit to pediatric surgery service if any of the following present at any point"></Label>
                <Label textWrap="true" class="indent" text="- Fever"></Label>
                <Label textWrap="true" class="indent" text="- Bloody stool"></Label>
                <Label textWrap="true" class="indent" text="- Lethargy"></Label>
                <Label textWrap="true" class="indent" text="- Unreliable access to care"></Label>
                <Label textWrap="true" text.decode="&bull; Otherwise, return to ED for trial of clear liquids"></Label>
                <Label textWrap="true" text.decode="&bull; After 4 hours of observation, if patient has tolerated clear liquids PO without vomiting or recurrent abdominal pain (and none of the above contraindications are present), then discharge home with return precautions."></Label>
                <Label textWrap="true" text.decode="&bull; *Any surgery, radiology, or ED staff member may request admission based on clinical judgment."></Label>
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