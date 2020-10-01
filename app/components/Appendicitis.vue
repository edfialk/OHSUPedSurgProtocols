<template>
    <Page class="page">
        <ActionBar></ActionBar>
        <ScrollView orientation="vertical">
            <StackLayout>
                <Label text="Management of Appendicitis" textWrap="true" class="h2 text-center" />
                <Label textWrap="true">
                    <FormattedString>
                        <Span class="ul bold">Pre-operative management</Span>
                        <Span> of appendicitis (i.e. operative, diagnosis-confirmed appendicitis – nonperforated or localized perforation deemed an OR candidate by attending)</Span>
                    </FormattedString>
                </Label>
                <Label textWrap="true" text="1. Admit to surgical service"></Label>
                <Label textWrap="true" text="2. NPO"></Label>
                <Label textWrap="true" text="3. Lactated Ringers 20 ml/kg bolus, repeated as necessary for pre-op resuscitation"></Label>
                <Label textWrap="true" text="4. IVF at 1.5 x maintenance with D5-0.45%NS (add 20 mEq KCl/L when urinating) or D5-LR"></Label>
                <Label textWrap="true" text="5. Ceftriaxone 50 mg/kg qday (max 2g per dose) and Metronidazole 30 mg/kg once daily (max 1500mg)."></Label>
                <Label textWrap="true" class="indent-2" text="a. If allergic to penicillin or cephalosporins, (specifically hives or anaphylaxis), then use ciprofloxacin (25mg/kg/day divided Q12hours with max dose of 500mg per dose) and metronidazole (30mg/kg/once daily, max 1500 mg)"></Label>
                <Label textWrap="true" text="6. Consent for laparoscopic appendectomy"></Label>
                <Label textWrap="true" text="7. Post for OR (This should be done expeditiously, even if a case is equivocal or a decision has not been made.  The case can always be cancelled, but delay to post may result in significant delay to OR)"></Label>
                <Label textWrap="true" text="8. Cefoxitin or Cefotetan IV 40 mg/kg (max 2g dose) should be given in the OR for pre operative prophylaxis if patient has not been given an appropriate antibiotic less than one hour before the procedure. "></Label>

                <Label textWrap="true" class="ul bold gap" text="Post-operative acute appendicitis (non-perforated) management"></Label>
                <Label textWrap="true" text="1. Advance diet as tolerated"></Label>
                <Label textWrap="true" text="2. IVF at maintenance with D5-0.45%NS with 20 mEq KCL/L, Saline well when tolerating PO"></Label>
                <Label textWrap="true" text="3. Preparation for discharge.  If the case is done early in the day, consider same day discharge, otherwise after breakfast the next morning."></Label>
                <Label textWrap="true" text="4. Scheduled Tylenol/Toradol.  Limit narcotics."></Label>
                <Label textWrap="true" text="5. Shower after 24 hours, swim or submerge incision after 7 days.  Discuss with attending when dressing should be removed if present."></Label>
                <Label textWrap="true" text="6. Activity as tolerated"></Label>
                <Label textWrap="true" text="7. No antibiotics necessary"></Label>
                <Label textWrap="true" text="8. No  narcotics at discharge"></Label>

                <Label textWrap="true" class="ul bold" text="Post-operative perforated appendicitis (gangrenous should be treated as perforated) management"></Label>
                <Label textWrap="true" text="1. Diet based on clinical evaluation of ileus"></Label>
                <Label textWrap="true" text="2. IVF at 1.5 x maintenance with D5-LR until good UOP (>1ml/kg) and no longer requiring IVF boluses for 12 hours, then switch to D5-0.45%NS with 20 mEq KCl/L at maintenance rate until taking adequate PO fluids"></Label>
                <Label textWrap="true" text="3. Ceftriaxone 50 mg/kg qday (max 2g) and Metronidazole 30 mg/kg qday (max 1500mg)"></Label>
                <Label textWrap="true" class="indent" text="a. If allergic to penicillin or cephalosporins (specifically hives or anaphylaxis), then use ciprofloxacin (25mg/kg/day divided Q12hours with max dose of 500mg per dose) and metronidazole (30mg/kg/ once daily, max 1500 mg)"></Label>
                <Label textWrap="true" class="indent" text="b. 	Switch to Zosyn if cultures demonstrate inadequate coverage Infants >9 months and children weighing <40 kg:  100 mg piperacillin/kg/dose every 8 hours; recommended max dose 3.375 g IV Q8. Children weighing >40 kg and adolescents:  3.375 g piperacillin every 6 hours; maximum daily dose: 16g piperacillin/day (***may go to 4.5 g IVQ6 in certain infections)"></Label>
                <Label textWrap="true" text="4. Continue IV antibiotics until the following criteria have been met:"></Label>
                <Label textWrap="true" class="indent" text="a. Afebrile x 48 hours"></Label>
                <Label textWrap="true" class="indent" text="b. Tolerating regular diet"></Label>
                <Label textWrap="true" class="indent" text="c. No tenderness on examination"></Label>
                <Label textWrap="true" class="indent" text="d. Having normal bowel movements"></Label>
                <Label textWrap="true" text="5. WBC’s when above criteria (in#4) met"></Label>
                <Label textWrap="true" class="indent" text="a. If WBC is between 5-15, and patient has completed 7 days of antibiotics, then discharge on no further antibiotics."></Label>
                <Label textWrap="true" class="indent" text="b. If WBC is between 5-15, and patient has not completed 7 day course antibiotics, then discharge and complete 7 days with oral antibiotics (Augmentin 40 mg/kg/day BID if <40 kg or Augmentin 875 mg BID if >40 kg)"></Label>
                <Label textWrap="true" class="indent" text="c. If WBC count is >15 or persistent left shift, then discharge and add an additional 7 days of oral antibiotics (Augmentin 40 mg/kg/day BID if <40 kg)"></Label>
                <Label textWrap="true" class="indent" text="d. If undrained fluid collection at discharge, add an additional 7 days of oral antibiotics"></Label>
                <Label textWrap="true" class="indent" text="e. If elevated immature granulocytes, discuss with Fellow/Attending need for additional antibiotics"></Label>
                <Label textWrap="true" text="6. If still symptomatic (fevers, persistent abdominal pain and/or distention) at 5-7 days – patient has failed therapy:"></Label>
                <Label textWrap="true" class="indent" text="a. Consider Ultrasound to screen for presence of fluid collection"></Label>
                <Label textWrap="true" class="indent" text="b. CT scan to assess for intraabdominal abscess"></Label>
                <Label textWrap="true" class="indent" text="c. Switch to Zosyn"></Label>
                <Label textWrap="true" class="indent-2" text="- Infants >9 months and children weighing <40 kg:  100 mg piperacillin/kg/dose every 8 hours:  Recommended max dose 3.375 g IV Q8."></Label>
                <Label textWrap="true" class="indent-2" text="- Children weighing >40 kg and Adolescents:  3.375 g piperacillin every 6 hours, maximum daily dose:  16 g piperacillin/day (***may go to 4.5 g IVQ6 in certain infections)"></Label>

                <Label textWrap="true" class="ul bold" text="Non-operative management of perforated appendicitis"></Label>
                <Label textWrap="true" text="1. Admit to surgical service"></Label>
                <Label textWrap="true" text="2. NPO until determined if patient needs abscess drainage"></Label>
                <Label textWrap="true" text="3. Once drainage has been performed or if no drainage is planned, then diet based on clinical evaluation of ileus"></Label>
                <Label textWrap="true" text="4. Lactated Ringers 20 ml/kg bolus, repeated as necessary for resuscitation"></Label>
                <Label textWrap="true" text="5. IVF at 1.5 x maintenance with D5-LR until good UOP (>1ml/kg) and no longer requiring IVF boluses for 12 hours, then switch to D5-0.45%NS with 20 mEq KCl/L at maintenance rate until taking adequate PO fluids"></Label>
                <Label textWrap="true" text="6. Notify radiology if abscess needs drainage - see below for drain management"></Label>
                <Label textWrap="true" text="7. Ceftriaxone 50 mh/kg qday (max 2g) and Metronidazole 30  mg/kg qday (max 1500mg)"></Label>
                <Label textWrap="true" class="indent" text="a. If allergic to penicillins or cephalosporins (specifically hives or anaphylaxis), then use Ciprofloxacin (25mg/kg/day divided Q12hours with max dose of 500mg per dose) and Metronidazole (30mg/kg once daily, max 1500 mg)"></Label>
                <Label textWrap="true" class="indent" text=" Switch to Zosyn  if cultures demonstrate inadequate coverage"></Label>
                <Label textWrap="true" class="indent-2" text="- Infants >9 months and Children weighing ≤40 kg: 100 mg piperacillin/kg/dose every 8 hours; Recomended max dose 3.375 g IV Q8."></Label>
                <Label textWrap="true" class="indent-2" text="- Children weighing >40 kg and Adolescents: 3.375 g piperacillin every 6 hours; maximum daily dose: 16 g piperacillin/day (***may go to 4.5 g IVQ6 in certain infections)"></Label>
                <Label textWrap="true" text="8.	Continue IV antibiotics until the following criteria have been met:"></Label>
                <Label textWrap="true" class="indent" text="a. Afebrile x 48 hours"></Label>
                <Label textWrap="true" class="indent" text="b. Tolerating regular diet"></Label>
                <Label textWrap="true" class="indent" text="c. No tenderness on examination"></Label>
                <Label textWrap="true" class="indent" text="d. Having bowel movements"></Label>
                <Label textWrap="true" text="9.	WBC when above criteria (in #4) met as described for perforated appendicitis above."></Label>

                <Label textWrap="true" class="ul bold" text="Management of nonoperative perforated appendicitis with drain placement"></Label>
                <Label textWrap="true" text="1. If CT demonstrates perforated appendicitis with abscess"></Label>
                <Label textWrap="true" class="indent" text="consult IR for possible drainage"></Label>
                <Label textWrap="true" class="indent-2" text.decode="&#x2022; drainage within 24-48 hours"></Label>
                <Label textWrap="true" class="indent-2" text.decode="&#x2022; duration of drainage"></Label>
                <Label textWrap="true" class="indent-3" text="- (<10 mL/day x2 days)"></Label>
                <Label textWrap="true" class="indent-2" text="clinical improvement (no fevers 48 hours, no tenderness, tolerating diet, having BM)"></Label>
                <Label textWrap="true" class="indent-2" text.decode="&#x2022; drain maintenance"></Label>
                <Label textWrap="true" class="indent-3" text="- flush 5-10 mL every 8 hours"></Label>
                <Label textWrap="true" class="indent-3" text="- reimage drains prior to removal if inadequate clinical improvement or inadequate drainage after 48 hours (U/S preferable)"></Label>
                <Label textWrap="true" class="indent-4" text.decode="&raquo; may consider tPA if drainage output low despite proper placement"></Label>
                <Label textWrap="true" class="indent-4" text.decode="&raquo; If pain on injection, or resistance, then flushing should be terminated and patient evaluated for drain removal a soon as feasible"></Label>
                <Label textWrap="true" text="2. Patient may go home with drain if all criteria for perforated appendicitis protocol met (listed in previous slide)"></Label>
                <Label textWrap="true" class="indent" text.decode="&#x2022; continue flushes 2x/day"></Label>
                <Label textWrap="true" text="3. Patient may go home with PICC line, home antibiotics and drain if below criteria met:"></Label>
                <Label textWrap="true" class="indent" text.decode="&#x2022; tolerating PO"></Label>
                <Label textWrap="true" class="indent" text.decode="&#x2022; low grade fever"></Label>
                <Label textWrap="true" class="indent" text.decode="&#x2022; some abdominal tenderness"></Label>
                <Label textWrap="true" class="indent" text.decode="&#x2022; clinically getting better"></Label>
                <Label textWrap="true" text="4. f/u in Surgery clinic within 1 week of discharge to monitor drain output and possible drain removal"></Label>

                <Label textWrap="true" class="ul bold" text="Management of re-admission for perforated appendicitis"></Label>
                <Label textWrap="true" text="1. If readmitted, start antibiotics as follows:"></Label>
                <Label textWrap="true" class="indent" text="a. If had never been on post-operative antibiotics, start Ceftriaxone 50 mh/kg qday (max 2g) + Metronidazole 30  mg/kg qday (max 1500mg)"></Label>
                <Label textWrap="true" class="indent" text="b. If had been on an antibiotic regime previously, but had not completed full 7 day course, restart prior regime and continue for a full 7 day course (prior days on antibiotics do not count)"></Label>
                <Label textWrap="true" class="indent" text="c. If still symptomatic after completing 7 day course start zosyn IV"></Label>
                <Label textWrap="true" class="indent-2" text="- Infants >9 months and Children weighing ≤40 kg: 100 mg piperacillin/kg/dose every 8 hours; Recomended max dose 3.375 g IV Q8."></Label>
                <Label textWrap="true" class="indent-2" text="- Children weighing >40 kg and Adolescents: 3.375 g piperacillin every 6 hours; maximum daily dose: 16 g piperacillin/day (***may go to 4.5 g IVQ6 in certain infections)"></Label>
                <Label textWrap="true" text="2. Discuss PICC placement with Fellow/Attending"></Label>
                <Label textWrap="true" text="3. Advance diet as tolerated"></Label>
                <Label textWrap="true" text="4. Arrange for home IV antibiotics for an additional 7 days oral versus PICC/IV"></Label>
                <Label textWrap="true" class="indent" text="a. Ceftriaxone and flagyl"></Label>
                <Label textWrap="true" class="indent" text="b. Zosyn"></Label>
                <Label textWrap="true" class="indent" text="c. Augmentin or Cipro/Flagyl for oral"></Label>
                <Label textWrap="true" text="5. If failure while on zosyn, start meropenem 20 mg/kg/dose IV Q8"></Label>

                <Label textWrap="true" class="ul bold" text="Home oral antibiotic regimen"></Label>
                <Label textWrap="true" text="1. Augmentin 40mg/kg/day BID if <40 kg"></Label>
                <Label textWrap="true" text="2. Augmentin 500mg BID if >40 kg"></Label>
                <Label textWrap="true" text="3. If allergic to penicillin, then use ciprofloxacin (25mg/kg/day divided Q12hours with max dose of 500mg) and metronidazole (30mg/kg/day divided Q6hours with daily max of 4 grams)"></Label>
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
