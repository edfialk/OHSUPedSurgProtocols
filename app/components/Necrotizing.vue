<template>
    <Page class="page">
        <ActionBar />

        
        <ScrollView>
            <GridLayout columns="*, *" rows="auto, auto, auto, auto, auto, auto, auto, auto, auto, auto, auto, auto, auto, auto">
                <Label row="0" col="0" colSpan="2" text="Treatment Algorithm for Necrotizing Enterocolitis" textWrap="true" class="h2" />
    
                <Label row="1" col="0" colSpan="2" textWrap="true">* For any suspected NEC (Bell’s stage 1): Immediate NPO. Possible nasogastric or orogastric tube to low intermittent suction if there is continued food intolerance, abdominal distension or bilious emesis.</Label>
                <Label row="2" col="0" colSpan="2" textWrap="true">* Surgical Consult required (if not done already) for any patient with pneumatosis or portal air (Bell’s stage 2).</Label>
                <Label row="3" col="0" colSpan="2" textWrap="true">* Frequency of labs and x-rays: If pneumatosis or portal venous gas, check 2 view abdominal films (AP and left lateral decubitus) and CBC/blood gas/lactate upon diagnosis Q6HOURS until clinical improvement evident. Daily 2 view abdominal films and labs should then be checked until resolution of pneumatosis and portal venous gas. At this point, no daily films or labs are needed unless change in clinical status or exam.</Label>

                <Label row="4" col="0" colSpan="2" textWrap="true">* Antibiotic choice:</Label>

                <Label row="5" col="0" colSpan="2" textWrap="true" class="bold border m-x-15" text="Medical NEC (without pnematosis)"></Label>
                <Label row="6" col="0" textWrap="true" class="border border-t-0 m-l-15" text="No concern for MRSA or ampicillin-resistant enterococcal infection"></Label>
                <Label row="6" col="1" textWrap="true" class="border border-t-0 border-l-0 m-r-15" text="Concerns for MRSA or ampicillin-resistant enterococcal infection"></Label>
                <Label row="7" col="0" textWrap="true" class="border border-t-0 m-l-15" text="Ampicillin + Gentamicin"></Label>
                <Label row="7" col="1" textWrap="true" class="border border-t-0 border-l-0 m-r-15" text="Vancomycin + Gentamicin"></Label>

                <Label row="8" col="0" colSpan="2" textWrap="true" class="bold border m-x-15 m-t-15" text="Medical NEC (with pnematosis or Surgical NEC)"></Label>
                <Label row="9" col="0" textWrap="true" class="border border-t-0 m-l-15" text="No concern for MRSA or ampicillin-resistant enterococcal infection"></Label>
                <Label row="9" col="1" textWrap="true" class="border border-t-0 border-l-0 m-r-15" text="Concerns for MRSA or ampicillin-resistant enterococcal infection"></Label>
                <Label row="10" col="0" textWrap="true" class="border border-t-0 m-l-15" text="Piperacillin- tazobactam or ampicillin + gentamicin + metronidazole"></Label>
                <Label row="10" col="1" textWrap="true" class="border border-t-0 border-l-0 m-r-15" text="Vancomycin + Piperacillin - tazobactam or vancomycin + gentamicin + metronidazole"></Label>

                <Label row="11" col="0" colSpan="2" textWrap="true">* Antibiotic duration / Duration of NPO: Continue antibiotics for 7 days after resolution of pneumatosis and portal venous gas and return of hemodynamic / laboratory stability. If initially utilized, NG/OG tube may be removed if patient stable and not having high output or bilious output.</Label>
                <Label row="12" col="0" colSpan="2" textWrap="true">* Re-initiation of feeds: After completion of antibiotics, start at 20ml/kg/day, advance by 20ml/kg/day as tolerated or per NICU premature infant feeding protocol, whichever is a slower rate.</Label>
                <Label row="13" col="0" colSpan="2" textWrap="true">*Contrast studies: Consider if does not tolerate advancement of feeds after medically managed NEC or if recurrent NEC. Should be performed after resolution of most recent NEC episode and close to time of potential operation. As possible, begin with contrast enema followed by upper GI series with small bowel follow through.</Label>
                <!-- <ImageZoom row="12" col="0" colSpan="2" src="~/images/Necrotizing.png" maxZoom="5" minZoom="1" width="100%" height="100" class="m-b-30" /> -->


                <!-- <Label textWrap="true"></Label>
                <Label textWrap="true">
                    <FormattedString>
                        <Span></Span>
                    </FormattedString>
                </Label> -->
    
            </GridLayout>
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
.border {
    border-color: black;
    border-width: 1 1 1 1;
}
.border-l {
    border-color: black;
    border-left-width: 1;
}
.border-t-0 {
    border-top-width: 0;
}
.border-r-0 {
    border-right-width: 0;
}
.border-l-0 {
    border-left-width: 0;
}
</style>