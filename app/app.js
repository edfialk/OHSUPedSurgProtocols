import Vue from "nativescript-vue";

import RadListView from "nativescript-ui-listview/vue";

Vue.use(RadListView);

Vue.config.silent = (TNS_ENV === 'production');

Vue.registerElement('ImageZoom', () => require('nativescript-image-zoom').ImageZoom)

import ProtocolList from "./components/ProtocolList";

new Vue({

    components: { ProtocolList },

    template: `
        <Frame>
            <ProtocolList />
        </Frame>`,


    data: {},

    created() {}
}).$start();
