<?php

	class EnemiesModel extends Model{

		protected $table = 'project001_enemies';

		public function allEnemySkills(){
			$request = $this->db->query("SELECT * FROM project001_enemy_skills");

			return $request->fetchAll();
		}
	}
?>
