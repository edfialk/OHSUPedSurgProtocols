<template>
    <Page class="page">
        <ActionBar />

        <ScrollView>
            <StackLayout>
                <Label text="Perianal Abscess Protocol" textWrap="true" class="h2 text-center" />

                <Label textWrap="true" class="bold">Infant (onset of symptoms at less than one year of age):</Label>

                <Label textWrap="true">Abscess less than or equal to 2 cm from the anal verge</Label>
                <Label textWrap="true" class="italic">Excludes abscesses in immunocompromised, Hirschsprung’s, IBD, or anorectal malformation patients</Label>
                <Label textWrap="true" class="bold ul m-t-20">Initial occurrence:</Label>
                <Label textWrap="true">Bactrim (15 mg/kg/day of TMP divided BID) for 7 days</Label>
                <Label textWrap="true" class="indent">or Clindamycin (30 mg/kg/day divided TID) in sulfa allergy or under two months of age.</Label>
                <Label textWrap="true">Sitz baths or warm compresses TID for 14 days.</Label>
                <Label textWrap="true">Warm water and soap for diaper changes for 14 days.  No baby wipes.</Label>
                <Label textWrap="true">Needle aspiration if area of fluctuance greater than 2 cm and less than 6 cm.</Label>
                <Label textWrap="true">Exam under anesthesia with incision and drainage if area of fluctuance > to 6 cm.</Label>

                <Label textWrap="true" class="italic m-t-20">Failure to improve – fevers greater > 38 after 48 hours of antibiotics, reaccumulation of aspirated abscess with area of fluctuance > to initial size at 48 hours, or persistent feeding difficulties after 5 days:</Label>
                <Label textWrap="true">Exam under anesthesia with incision and drainage.</Label>

                <Label textWrap="true" class="bold ul m-t-20">First Recurrence:</Label>
                <Label textWrap="true">Bactrim (15 mg/kg/day of TMP divided BID) for 7 days</Label>
                <Label textWrap="true" class="indent">or Clindamycin (30 mg/kg/day divided TID) in sulfa allergy or under two months of age.</Label>
                <Label textWrap="true">Sitz baths or warm compresses TID for 14 days, then daily for 14 days.</Label>
                <Label textWrap="true">Warm water and soap for diaper changes for 1 month.  No baby wipes.</Label>
                <Label textWrap="true">Needle aspiration if area of fluctuance greater than 2 cm and less than 6 cm.</Label>
                <Label textWrap="true">Exam under anesthesia with incision and drainage if area of fluctuance > to 6 cm.</Label>

                <Label textWrap="true" class="bold ul m-t-20">Repeat Recurrences:</Label>
                <Label textWrap="true">Avoid antibiotics unless fever greater than 38.</Label>
                <Label textWrap="true">Sitz baths or warm compresses TID for 14 days, then daily for 2 months.</Label>
                <Label textWrap="true">Warm water and soap for diaper changes for 3 months.  No baby wipes.</Label>
                <Label textWrap="true">Needle aspiration if area of fluctuance greater than 2 cm and less than 6 cm.</Label>
                <Label textWrap="true">Exam under anesthesia with incision and drainage if area of fluctuance > to 6 cm.</Label>

                <Label textWrap="true" class="italic m-t-20">Persistent disease once child is at least one year of age AND treated per above protocol at minimum six months from initial occurrence:</Label>
                <Label textWrap="true">Exam under anesthesia with incision and drainage and search for fistula-in-ano + fistulotomy.</Label>
                <Label textWrap="true">No antibiotics.</Label>
                <Label textWrap="true">Sitz baths or warm compresses TID for 14 days, then daily for 2 months.</Label>
                <Label textWrap="true">Warm water and soap for diaper changes for 3 months.  No baby wipes.  </Label>

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