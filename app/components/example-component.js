import Component from '@ember/component';
import InViewportMixin from 'ember-in-viewport';

export default Component.extend(InViewportMixin, {
  didEnterViewport() {
    console.log('entered');
  },

  didExitViewport() {
    console.log('exited');
  }
});
