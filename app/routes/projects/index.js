import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.findAll('project').then(function(projects){
			return projects.filterBy('isArchived', false);
		});
	}
});