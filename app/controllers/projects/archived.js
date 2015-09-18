import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
  	restoreProject: function(project) {
  		project.set('isArchived', false).save();
  	}
  }
});
