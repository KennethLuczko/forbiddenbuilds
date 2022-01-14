import Route from '@ember/routing/route';

export default class CraftingRoute extends Route {
    model() {
        return ['Low Level', 'End Game'];
      }
}
