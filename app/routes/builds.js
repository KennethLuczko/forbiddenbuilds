import Route from '@ember/routing/route';

export default class BuildsRoute extends Route {
    model() {
        return ['Spark Totem', 'EK Marauder', 'LA Ranger'];
      }
}
