import Ember from 'ember';

export default Ember.Controller.extend({
	newProject: null,
	actions: {
  	createProject: function(project) {
  		var controller = this;
      if (project) {
    		this.store.createRecord('project', {
    			name: project
    		}).save().then(function(){
    			controller.set('newProject', '');
    		});
      }
  	}
  }
});
