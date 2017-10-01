<?php

	class SkillsModel extends Model{

		protected $table = 'project001_skills';

		public function allSkillTypes(){
			$request = $this->db->query("SELECT * FROM project001_skill_types");

			return $request->fetchAll();
		}
	}
?>
