<?php

	class ClassModel extends Model{

		protected $table = 'project001_class';

		public function allClassArmorTypes(){
			$request = $this->db->query("SELECT * FROM project001_class_armor_types");

			return $request->fetchAll();
		}

		public function allClassSkillTypes(){
			$request = $this->db->query("SELECT * FROM project001_class_skill_types");

			return $request->fetchAll();
		}

		public function allClassWeapons(){
			$request = $this->db->query("SELECT * FROM project001_class_weapons");

			return $request->fetchAll();
		}

	}
?>
