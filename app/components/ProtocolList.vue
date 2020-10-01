<template>
    <Page class="protocols-list">
        <ActionBar>
            <StackLayout orientation="horizontal"
                ios:horizontalAlignment="center"
                android:horizontalAlignment="left">
                <Image src="~/images/logo.png" class="action-image" />
                <Label text="Pediatric Surgery Protocols" class="action-label" />
            </StackLayout>
        </ActionBar>

        <ListView for="item in items" @itemTap="onItemTap" class="bg-white">
            <v-template>
                <StackLayout orientation="horizontal">
                    <Label :text="item.name" textWrap="true"></Label>
                </StackLayout>
            </v-template>
        </ListView>

    </Page>
</template>

<script>

    import Mediastinal from './Mediastinal';
    import MediastinalMassAnesthesia from './MediastinalMassAnesthesia';
    import Appendicitis from './Appendicitis';
    import CentralLineInsertion from './CentralLineInsertion';
    import CentralLineRemoval from './CentralLineRemoval';
    import PostGastronomy from './PostGastronomy';
    import Ileocolic from './Ileocolic';
    import Necrotizing from './Necrotizing';
    import Perianal from './Perianal';
    import Pyloric from './Pyloric';
    import SmallBowel from './SmallBowel';
    import SolidOrganInjury from './SolidOrganInjury';
    import Pneumothorax from './Pneumothorax';

    export default {

        data: () => {
            return {
                items: [
                    {
                        name: "Management of Anterior Mediastinal Masses",
                        link: Mediastinal
                    },
                    {
                        name: "Mediastinal Mass Anesthesia",
                        link: MediastinalMassAnesthesia
                    },
                    {
                        name: "Appendicitis",
                        link: Appendicitis
                    },
                    {
                        name: "Central Line Insertion",
                        link: CentralLineInsertion
                    },
                    {
                        name: "Central Line Removal",
                        link: CentralLineRemoval
                    },
                    {
                        name: "Post-Gastrostomy Feeding",
                        link: PostGastronomy
                    },
                    {
                        name: "Management of Ileocolic Intussusception",
                        link: Ileocolic
                    },
                    {
                        name: "Algorithm for Necrotizing Enterocolitis",
                        link: Necrotizing
                    },
                    {
                        name: "Management of Perianal Abscess",
                        link: Perianal
                    },
                    {
                        name: "Pyloric Stenosis",
                        link: Pyloric
                    },
                    {
                        name: "Small Bowel Obstruction",
                        link: SmallBowel
                    },
                    {
                        name: "Solid Organ Injury",
                        link: SolidOrganInjury
                    },
                    {
                        name: "Spontaneous Pneumothorax",
                        link: Pneumothorax
                    },
                ]
            }
        },

        methods: {
            onItemTap(e) {
                this.$navigateTo(e.item.link, {
                    transition: {
                        name: 'slideLeft',
                        duration: 200
                    }
                });
            }
        }
    };
</script>

<style scoped lang="scss">
</style>
