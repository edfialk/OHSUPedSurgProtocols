<template>
    <Page class="page">
        <ActionBar />

        <ScrollView>
            <StackLayout>
                <Label text="Management of Pyloric Stenosis" textWrap="true" class="h2 text-center" />

                <Label textWrap="true">1. Suspect the diagnosis in any infant 2 weeks to 3 months with projectile, nonbilious vomiting.  There is an increased incidence in first born males and in patients whose mom had it.  ALWAYS CONFIRM EMESIS IS NONBILIOUS!</Label>
                <Label textWrap="true">2. You should attempt to palpate an epigastric olive to confirm the diagnosis.  This is often difficult with a full stomach or a crying infant.   With the child lying on the exam table and you on the right side of the patient, place your right hand on the abdomen and your left hand should lift the legs towards the abdomen, making sure you are under the liver edge and press down to the spine in the epigastrium.  Then roll your right hand toward the umbilicus and the olive should roll beneath your fingers and “pop up” as you release it.  It feels hard and is literally the size of an olive.  This is usually hard to feel unless the child has been sick long enough to be significantly dehydrated.  Don’t spend more than 5 minutes trying this or more than 1-2 attempts.</Label>
                <Label textWrap="true">3. Ultrasound is the diagnostic study of choice.  Normal channel length is 1.4 cm; normal muscle thickness is less than 4mm. Perhaps more importantly than the measurements of the pylorus is the mechanics of the muscle itself. If the pylorus does not open and allow the stomach contents to empty  while it is being watched on real time ultrasound, than one can be relatively certain of the diagnosis of pyloric stenosis.  Transferring institution ultrasound should always be reviewed locally and repeat if not conclusive.</Label>
                <Label textWrap="true">4. Significant dehydration is a common finding.  Gastric losses cause hypochloremic, hypokalemic alkalosis.  Fluid boluses of NS 10-20cc/kg should be given until urine output is established.  Then start an IVF D5 ½ NS with 10-20mEq KCL/liter at 1.5x maintenance and follow electrolytes in 8-12 hours.  Rapid rehydration and correction of electrolytes is not warranted.  Pyloric stenosis is not an emergency.  Operation is carried out once dehydration and electrolyte abnormalities are corrected.  These should not be corrected rapidly and under most circumstances the infant does not need labs more frequently than every 8-12 hours.  Generally, the bicarbonate should be less than 30 and the chloride greater than 100 prior to operative intervention.</Label>
                <Label textWrap="true">5. Pyloromyotomy is done both open and laparoscopically, determine attending surgeon plan prior to consent discussion.  The two specific complications that apply with this operation are incomplete myotomy or mucosal perforation.  These are both very rare but should be included in the discussion.</Label>
                <Label textWrap="true">6. Post-op:  Begin ad lib feeds once fully awake from anesthesia.  Continue IVF until tolerating good PO.  Okay for discharge when patient tolerates two successive full volume feeds with minimal emesis.</Label>
                <Label textWrap="true" class="bold">7. Post-op management used to be a very complicated regime of increasing the strength and then increasing the volume over a period of days. We now simplify this routine. NPO until fully awake and crying for food, then begin ad lib feeds. Okay for discharge when patient tolerates 2 successive feeds with minimal emesis If the babies vomit, which they frequently do, the feedings are continued as before. They do not need to be made NPO- keep feeding them and they will do just fine. No antibiotics are needed post-op.  Marcaine is put in the wounds at operation, so only Tylenol is needed post-op and is given rectally or orally (10-15mg/kg) around the clock.  Tenderness, fever, or need for narcotics post-op are always abnormal and may be a sign of a perforation.  This should always result in notification of the Fellow/Attending.</Label>
                <Label textWrap="true">8. In the event the patient has a mucosal injury repaired at operation, an NGT is left in place on low continuous wall suction for 1 to 3 days.  Depending on the severity and extent of repair, a contrast study may be obtained prior to removing the NGT and starting feeds.  Each case will be unique.</Label>

                <Label textWrap="true" class="ul bold m-t-20">Step by step protocol</Label>

                <Label textWrap="true">1. Ensure it is not bilious emesis, if bilious needs stat UGI and notify attending or fellow depending on day of week</Label>
                <Label textWrap="true">2. Electrolyte panel to evaluate for hypochloremic, hypokalemic metabolic acidosis</Label>
                <Label textWrap="true">3. Abdominal ultrasound to evaluate for pyloric stenosis (<4 mm thick, <14 cm long normal)</Label>
                <Label textWrap="true">4. Bolus with 20 cc/kg of NS</Label>
                <Label textWrap="true">5. Start on D5 ½ NS at 1.5 x maintenance rate, add 20 mEq of KCL once CONFIRMED urine output </Label>
                <Label textWrap="true">6. Bolus as needed until urine output >1 cc/kg/hr</Label>
                <Label textWrap="true">7. If initial electrolytes were abnormal, repeat electrolytes in 8-12 hours (in the morning if admitted overnight)</Label>
                <Label textWrap="true">8. Proceed to operating room only after UOP >1 cc/kg/hr and bicarb <30 and chloride >100</Label>
                <Label textWrap="true">9. Pyloromyotomy done laparoscopically or open depending on attending</Label>
                <Label textWrap="true">10. Postoperatively: </Label>
                <Label textWrap="true" class="indent">a. Begin ad lib feeds when awake and interested in feeding (emesis is not unusual)</Label>
                <Label textWrap="true" class="indent">b. Continue maintenance IV fluids until taking adequate PO</Label>
                <Label textWrap="true" class="indent">c. Scheduled Tylenol ONLY for pain control, no opioids</Label>
                <Label textWrap="true" class="indent">d. Discharge to home when tolerated two consecutive full feeds without emesis</Label>

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