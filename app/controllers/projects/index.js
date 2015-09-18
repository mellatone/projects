import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
  	archiveProject: function(project) {
  		project.set('isArchived', true).save();
  	}
  }
});
