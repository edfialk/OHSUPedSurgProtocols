<template>
    <Page class="page">
        <ActionBar />

        <ScrollView>
            <StackLayout>
                <Label text="Anesthesia Safety Guidelines for Patients with Anterior Mediastinal Masses" textWrap="true" class="h2 text-center" />
                <Label textWrap="true" text="These guidelines have been established to help decide timing of sedation for a diagnostic procedure, with the goal of avoiding general anesthesia."></Label>
                <Label textWrap="true">
                    <FormattedString>
                        <Span textDecoration="underline">As soon as it is decided that a patient will need sedation for a diagnostic procedure, the anesthesia team should be consulted.</Span>
                        <Span>This consultation may help guide the decision of whether or not steroids are necessary prior to a sedated procedure. The team that is to perform the procedure (surgery, heme-onc, radiology) will contact the anesthesia consult pager to find the name of the sedating provider with whom the discussion will be held.</Span>
                    </FormattedString>
                </Label>
                <Label textWrap="true" class="h2">Patients who are considered low risk and should not require steroids include:</Label>
                <Label textWrap="true">1 – No signs or symptoms of airway or vascular compromise</Label>
                <Label textWrap="true">2 – No CT or TTE findings suggestive of airway or vascular compression</Label>
                <Label textWrap="true" class="h2">Patients who are considered moderate risk who may require steroids after discussion with the anesthesia provider include:</Label>
                <Label textWrap="true">1 – Mild respiratory symptoms</Label>
                <Label textWrap="true">2 – Less than 50 % tracheal compression and NO bronchial compression on CT</Label>
                <Label textWrap="true">3 – No cardiac or vascular compression on imaging</Label>
                <Label textWrap="true" class="h2">Patients who are considered high risk and should empirically receive steroids include:</Label>
                <Label textWrap="true">1 – Signs or symptoms or SVC syndrome </Label>
                <Label textWrap="true">2 – Moderate to severe respiratory symptoms including orthopnea, stridor, dyspnea, feeling of chest fullness, cough or increased work of breathing </Label>
                <Label textWrap="true">3 – Greater than 50% tracheal compression on CT</Label>
                <Label textWrap="true">4 – ANY bronchial or great vessel compression on CT</Label>
                <Label textWrap="true">5 – Presence of tamponade physiology on TTE</Label>
                <Label textWrap="true">It is important to be aware that anesthetic complications have occurred in children with anterior mediastinal masses who presented with symptoms only (no worrisome imaging) and with worrisome imaging only (no symptoms); therefore we must take both into account when making this decision.</Label>
                <Label textWrap="true">
                    <FormattedString>
                        <Span>Once steroids are started, </Span>
                        <Span textDecoration="underline">daily assessments</Span>
                        <Span> between the anesthesia, oncology and surgical teams should be held in order to determine timing of sedated procedure.  Maximum effect of steroids is likely at 48 hours so sedation should not be delayed significantly beyond this time.  Other than clinical assessment, no further imaging is necessary to determine timing of procedure.</Span>
                    </FormattedString>
                </Label>
                <Label textWrap="true">Goal is to proceed to the operating room within 72 hours of starting steroids (avoiding weekend procedures).  The anesthesiologist will administer the least amount of anesthesia possible to perform the procedure with the primary goal to maintain hemodynamic stability as well as spontaneous ventilation (in most cases).   </Label>
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